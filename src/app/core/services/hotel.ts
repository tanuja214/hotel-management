import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HotelService {

  private baseUrl = 'https://YOUR-NGROK-LINK.ngrok-free.app/api';

  constructor(private http: HttpClient) {}

  getAvailableRooms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/rooms/available`);
  }

  createBooking(payload: {
    userId: number;
    roomId: number;
    bookingDate: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookings`, payload);
  }
}