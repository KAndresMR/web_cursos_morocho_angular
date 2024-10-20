import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseApiService {
  private apiUrl = 'http://localhost:3000'; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) { }

  // Método para obtener todos los cursos
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/api/courses`); // Endpoint para obtener cursos
  }

  // Método para agregar un nuevo curso
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/api/courses`, course); // Endpoint para agregar un curso
  }

  // Método para eliminar un curso
  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/courses/${courseId}`); // Endpoint para eliminar un curso
  }

  // Método para obtener información adicional de un curso
  getAdditionalInfo(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/courses/${courseId}/additional-info`); // Endpoint para información adicional
  }
}
