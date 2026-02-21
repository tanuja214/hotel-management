import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookingService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private headers() {
    return new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });
  }

  createBooking(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/booking/create`, payload, {
      headers: this.headers()
    });
  }

  getBookingsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/booking/user/${userId}`, {
      headers: this.headers()
    });
  }
}