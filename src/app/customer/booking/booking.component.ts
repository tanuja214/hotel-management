import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BookingService } from '../../core/services/booking.service';
import { Booking } from '../../core/models/booking.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, DatePipe], 
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    const userId = Number(localStorage.getItem('userId'));

    if (!userId) {
      this.bookings = [];
      return;
    }

    this.bookingService.getBookingsByUser(userId).subscribe({
      next: (data) => (this.bookings = data || []),
      error: (err) => {
        console.error('Error loading bookings:', err);
        this.bookings = [];
      }
    });
  }
}