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
  // Modelo para un nuevo curso
  newCourse: Course = {
    id: 0,
    nameCourse: '',
    nameInstructor: '',
    startDate: '',
    duration: '',
    description: '',
    showDetails: false
  };

  // Propiedades para mensajes y estado
  message: string = '';
  showSuccessMessage = false;
  courses: any[] = []; // Almacena la lista de cursos
  minDate: string; // Fecha mínima permitida para la entrada

  constructor(private courseService: CourseServiceService) {
    // Establecer la fecha mínima en el constructor
    const today = new Date();
    this.minDate = today.toISOString().split("T")[0]; // Formato YYYY-MM-DD
  }

  ngOnInit(): void {
    // Recuperar cursos de LocalStorage al cargar el componente
    this.loadCoursesFromLocalStorage();
  }

  // Función que se activa cuando se presiona una tecla
  onKeyPress(event: Event) {
    const input = event.target as HTMLInputElement;

    // Añadir la clase 'shake' al input para una animación visual
    input.classList.add('shake');

    // Remover la clase 'shake' después de la animación (0.4s)
    setTimeout(() => {
      input.classList.remove('shake');
    }, 400);
  }

  addCourse() {
    // Validar que todos los campos requeridos están completos
    if (!this.newCourse.nameCourse || !this.newCourse.nameInstructor || !this.newCourse.startDate || !this.newCourse.duration || !this.newCourse.description) {
      this.message = "Por favor completa todos los campos requeridos.";
      return;
    }

    // Validar que la fecha no sea anterior a hoy
    const selectedDate = new Date(this.newCourse.startDate);
    const today = new Date();

    if (selectedDate < today) {
      this.message = "La fecha de inicio debe ser igual o posterior a hoy.";
      return;
    }

    // Crear el objeto del nuevo curso
    const courseToAdd = {
      nameCourse: this.newCourse.nameCourse,
      nameInstructor: this.newCourse.nameInstructor,
      startDate: this.newCourse.startDate,
      duration: this.newCourse.duration,
      description: this.newCourse.description,
      showDetails: false
    };

    // Obtener cursos existentes del LocalStorage
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
    }, 1000); // Mostrar el mensaje por 1 segundo     
  }

  loadCoursesFromLocalStorage() {
    const storedCourses = JSON.parse(localStorage.getItem('courses') ?? '[]'); // Usar '[]' si es null
    if (storedCourses) {
      // Manejar la lógica para mostrar los cursos en tu componente
      this.newCourse = storedCourses; // Asignar los cursos a la propiedad
      console.log(storedCourses); // Solo para ver en la consola los cursos almacenados
    }
  }
}
