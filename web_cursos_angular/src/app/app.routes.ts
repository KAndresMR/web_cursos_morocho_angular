import { Routes } from '@angular/router';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'homeScreen', component: HomeComponent },
    { path: 'coursesScreen',component: CoursesComponent }, 
    { path: 'add_coursesScreen',component: AddCoursesComponent },
    { path: 'contactScreen',component: ContactComponent },       
];
