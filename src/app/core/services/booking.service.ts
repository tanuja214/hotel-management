import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [];

  addBooking(booking: Booking) {
    this.bookings.push(booking);
  }

  getBookings(): Booking[] {
    return this.bookings;
  }

  getBookingsByUser(userId: number): Booking[] {
    return this.bookings.filter(b => b.userId === userId);
  }
}
