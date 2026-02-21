import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service'; // adjust path if needed

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.errorMsg = '';

    this.authService.login(this.loginData).subscribe({
      next: () => {
        this.router.navigate(['/customer']);
      },
      error: (err) => {
        console.log(err);
        this.errorMsg = err?.error?.message || 'Login failed';
        alert(this.errorMsg);
      }
    });
  }
}