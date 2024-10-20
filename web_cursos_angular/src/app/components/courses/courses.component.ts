import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseServiceService } from '../../services/Course/course-service.service';
import { CourseApiService } from '../../services/courseApi/course-api.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'] // Asegúrate de que este sea styleUrls, no styleUrl
})
export class CoursesComponent {
  courses: Course[] = [];
  additionalDescription: string = ''; // Inicializa la propiedad

  constructor(
    private courseService: CourseServiceService,
    private courseApiService: CourseApiService
  ) { }

  ngOnInit(): void {    
    this.loadCoursesFromLocalStorage();    
  }

  loadAdditionalInfo(course: Course) {
    const randomId = Math.floor(Math.random() * 15) + 1; // Genera un ID aleatorio entre 1 y 15

    this.courseApiService.getAdditionalInfo(randomId).subscribe(
        (info) => {
            course.additionalInfo = info.dato; // Almacena la descripción en el curso correspondiente
        },
        (error) => console.error('Error al cargar información adicional:', error)
    );
  }


  toggleDetalles(course: Course) {
    course.showDetails = !course.showDetails;
    if (course.showDetails) {
      this.loadAdditionalInfo(course); // Pasa el curso actual
    }
  }


    // Función para cargar los cursos desde el localStorage
    loadCoursesFromLocalStorage() {
      //localStorage.clear();
      this.courses = this.courseService.getCourse();
    }

  // Elimina un curso
  deleteCourse(courseId: number) {
    this.courseApiService.deleteCourse(courseId).subscribe(() => {
      this.courses = this.courses.filter(course => course.id !== courseId);
    }, error => {
      console.error('Error al eliminar el curso:', error);
    });
  }
}
