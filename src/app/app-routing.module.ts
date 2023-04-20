import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './curriculum/admin/admin.component';
import { TeacherComponent } from './curriculum/teacher/teacher.component';
import { StudentComponent } from './curriculum/student/student.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './curriculum/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', redirectTo: '/login', pathMatch: 'full' },
  { path: 'teacher', redirectTo: '/login', pathMatch: 'full' },
  { path: 'student', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
