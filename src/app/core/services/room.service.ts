import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private headers() {
    return new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });
  }

  getRooms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/room/all`, {
      headers: this.headers()
    });
  }
}