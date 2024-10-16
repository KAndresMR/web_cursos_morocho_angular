import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddCoursesComponent, CoursesComponent, ContactComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web_cursos_angular';
}
