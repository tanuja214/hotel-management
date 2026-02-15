import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/auth/register">Register</a> |
      <a routerLink="/auth/login">Login</a> |
      <a routerLink="/admin">Admin</a> |
      <a routerLink="/customer">Customer</a> |
       <a routerLink="/customer/history">History</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
