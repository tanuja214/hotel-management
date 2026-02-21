import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../core/services/booking.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.html'
})
export class HistoryComponent implements OnInit {

  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    const userId = Number(localStorage.getItem('userId'));

    this.bookingService.getBookingsByUser(userId).subscribe({
      next: (data) => {
        console.log("Booking history:", data);
        this.bookings = data;
      },
      error: (err) => {
        console.error("History error:", err);
      }
    });
  }
}