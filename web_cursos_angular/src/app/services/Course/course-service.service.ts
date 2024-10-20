import { Injectable } from '@angular/core';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  courses: Course[] = [
    {
      id: 1,
      nameCourse: 'Curso de Diseño Web',
      nameInstructor: 'María López',
      startDate: '15/10/2024',
      duration: '6 ',
      description: 'Explora el diseño web moderno utilizando HTML5, CSS3 y herramientas de diseño gráfico.',
      showDetails: false
    }
  ];

  constructor() { }

  addCourse(course: Course) {
    const newCourse = { ...course, id: this.courses.length + 1 }; // Genera un ID único
    this.courses.push(newCourse);
    localStorage.setItem('courses', JSON.stringify(this.courses));
  }
  

  // Método para obtener la lista de cursos
  getCourse() {
    return JSON.parse(localStorage.getItem('courses') ?? '[]');
  }
}
