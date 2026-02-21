import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav style="padding:10px; background:#1976d2;">
      <a routerLink="/login" style="color:white; margin-right:15px;">Login</a>
      <a routerLink="/register" style="color:white; margin-right:15px;">Register</a>
      <a routerLink="/rooms" style="color:white; margin-right:15px;">Customer</a>
      <a routerLink="/history" style="color:white;">History</a>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
