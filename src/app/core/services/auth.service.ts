import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getNgrokHeaders(): HttpHeaders {
    return new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data, {
      headers: this.getNgrokHeaders()
    }).pipe(
      tap((response: any) => {
        // Save userId after login
        if (response?.userId) {
          localStorage.setItem('userId', response.userId);
        }
      }),
      catchError((error) => {
        console.error('AuthService - login error:', error);
        return throwError(() => error);
      })
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, data, {
      headers: this.getNgrokHeaders()
    }).pipe(
      catchError((error) => {
        console.error('AuthService - register error:', error);
        return throwError(() => error);
      })
    );
  }

  logout() {
    localStorage.removeItem('userId');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }
}
