import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

 
  private randomNumberSubject = new BehaviorSubject<number>(0);
  randomNumber$ = this.randomNumberSubject.asObservable();

  constructor(private http: HttpClient) {}

  
  generateRandom() {
    this.randomNumberSubject.next(Math.random());
  }

 
  getHotelBranch(): Observable<any> {
    console.log(`OnboardingService - Getting hotel branches from: ${environment.apiUrl}/hotel/api/v1/getAll`);
    return this.http.get(`${environment.apiUrl}/hotel/api/v1/getAll`).pipe(
      catchError((error) => {
        console.error('OnboardingService - getHotelBranch error:', error);
        return throwError(() => error);
      })
    );
  }

  createHotelBranch(data: any): Observable<any> {
    console.log(`OnboardingService - Creating hotel branch at: ${environment.apiUrl}/hotel/api/v1/create`, data);
    return this.http.post(`${environment.apiUrl}/hotel/api/v1/create`, data).pipe(
      catchError((error) => {
        console.error('OnboardingService - createHotelBranch error:', error);
        return throwError(() => error);
      })
    );
  }
}

