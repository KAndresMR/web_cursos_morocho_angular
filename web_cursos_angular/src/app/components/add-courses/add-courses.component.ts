import { Component } from '@angular/core';
import { CourseServiceService } from '../../services/Course/course-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-add-courses',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-courses.component.html',
  styleUrl: './add-courses.component.scss'
})
export class AddCoursesComponent {
  newCourse: Course = {
    id: 0, // Agrega esta propiedad para el ID
    nameCourse: '',
    nameInstructor: '',
    startDate: '',
    duration: '',
    description: '',
    showDetails: false
  };
  message: string = '';
  showSuccessMessage = false;
  courses: any[] = []; // Propiedad para almacenar la lista de cursos

  constructor(private courseService: CourseServiceService) { }

  ngOnInit(): void {
    // Recuperar cursos de LocalStorage al cargar el componente
    this.loadCoursesFromLocalStorage();
  }

  // Esta función se activará cuando el usuario presione una tecla
  onKeyPress(event: Event) {
    const input = event.target as HTMLInputElement;

    // Añadir la clase 'shake' al input
    input.classList.add('shake');

    // Remover la clase 'shake' después de la animación (0.4s)
    setTimeout(() => {
      input.classList.remove('shake');
    }, 400);
  }

  addCourse() {
    // Crear el objeto del nuevo curso
    const courseToAdd = {
      nameCourse: this.newCourse.nameCourse,
      nameInstructor: this.newCourse.nameInstructor,
      startDate: this.newCourse.startDate,
      duration: this.newCourse.duration,
      description: this.newCourse.description,
      showDetails: false
    };

    // Obtener los cursos existentes del LocalStorage
    const storedCourses = JSON.parse(localStorage.getItem('courses') ?? '[]'); // Usar '[]' si es null
    if (storedCourses) {
      this.newCourse = storedCourses; // Asignar los cursos a la propiedad
    }

    // Agregar el nuevo curso a la lista
    storedCourses.push(courseToAdd);

    // Almacenar la lista actualizada en LocalStorage
    localStorage.setItem('courses', JSON.stringify(storedCourses));

    // Mostrar mensaje de éxito    
    this.showSuccessMessage = true;

    // Limpiar el formulario
    this.newCourse = { 
      id: 0,
      nameCourse: '', 
      nameInstructor: '', 
      startDate: '', 
      duration: '', 
      description: '', 
      showDetails: false // Asegurarse de incluir showDetails
    };

    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 1000); // 2 segundos de duración     
  }

  loadCoursesFromLocalStorage() {
    const storedCourses = JSON.parse(localStorage.getItem('courses') ?? '[]'); // Usar '[]' si es null
    if (storedCourses) {
      // Aquí puedes manejar la lógica para mostrar los cursos en tu componente
      this.newCourse = storedCourses; // Asignar los cursos a la propiedad
      console.log(storedCourses); // solo para ver en la consola los cursos almacenados
    }
  }
}
