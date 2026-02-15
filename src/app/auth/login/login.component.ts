import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-login',
  template: `
    <h2>Login Page</h2>
    <form>
      <label>Email:</label>
      <input type="email" />
      <br />
      <label>Password:</label>
      <input type="password" />
      <br />
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent {}
