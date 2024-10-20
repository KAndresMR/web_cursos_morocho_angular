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

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/api/courses`); // Agregando el endpoint
  }

  // Método para agregar un nuevo curso
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/api/courses`, course);
  }


  // Método para eliminar un curso
  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/courses/${courseId}`); // Agregar `/api/courses` para el endpoint
  }

  // Dentro de CourseApiService
  getAdditionalInfo(courseId: number) {
    return this.http.get<any>(`${this.apiUrl}/api/courses/${courseId}/additional-info`);
  }



}
