import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router){}
  
  onSubmit(){
    if (this.email === 'admin@example.com' && this.password === 'password') {
      this.router.navigate(['/admin']);
    } else if (this.email === 'teacher@example.com' && this.password === 'password') {
      this.router.navigate(['/teacher']);
    } else if (this.email === 'student@example.com' && this.password === 'password') {
      this.router.navigate(['/student']);
    } else {
      alert('Invalid login credentials. Please try again.');
    }
  }
 
}
