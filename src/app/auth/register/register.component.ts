import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: Partial<User> = {
    name: '',
    email: '',
    password: '',
    role: 'customer'
  };

  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    if (!this.model.name || !this.model.email || !this.model.password) {
      this.message = 'Please fill all required fields.';
      return;
    }

    const user: User = {
      id: Date.now(),
      name: this.model.name!,
      email: this.model.email!,
      password: this.model.password!,
      role: 'customer'
    };

    this.auth.register(user);
    this.message = 'Registration successful. Redirecting to login...';

    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 900);
  }
}
