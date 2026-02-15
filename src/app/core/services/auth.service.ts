import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [];

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  register(user: User) {
    this.users.push(user);
  }

  login(email: string, password: string) {
    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.currentUserSubject.next(user);
      return true;
    }

    return false;
  }

  logout() {
    this.currentUserSubject.next(null);
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }
}
