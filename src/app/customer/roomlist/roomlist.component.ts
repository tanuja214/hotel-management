import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HotelService } from '../../core/services/hotel'; // ✅ your file is hotel.ts

export interface Room {
  room_id?: number;     // backend may send room_id
  id?: number;          // or backend may send id
  type: string;
  price: number;
  availableCount: number;
}

@Component({
  selector: 'app-roomlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  errorMsg: string = '';
  bookingInProgress: Record<number, boolean> = {};

  constructor(private hotelService: HotelService, private router: Router) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  // ✅ supports room_id OR id
  getRoomId(r: Room): number {
    return Number(r.room_id ?? r.id ?? 0);
  }

  loadRooms(): void {
    this.errorMsg = '';

    this.hotelService.getAvailableRooms().subscribe({
      next: (res: any) => {
        console.log('Rooms API response:', res);

        if (Array.isArray(res)) {
          this.rooms = res as Room[];
        } else {
          this.rooms = (res?.rooms ?? res?.data ?? []) as Room[];
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log('Rooms API error:', err);
        this.rooms = [];
        this.errorMsg = `Failed to load rooms (status: ${err.status}).`;
      }
    });
  }

  bookRoom(room: Room): void {
    const roomId = this.getRoomId(room);
    if (!roomId) {
      this.errorMsg = 'Room id not found from backend response.';
      return;
    }

    if (room.availableCount <= 0) return;

    const userId = Number(localStorage.getItem('userId') || '0');
    if (!userId) {
      this.errorMsg = 'Please login first.';
      this.router.navigate(['/login']);
      return;
    }

    this.bookingInProgress[roomId] = true;
    this.errorMsg = '';

    const payload = {
      userId,
      roomId,
      bookingDate: new Date().toISOString().slice(0, 10)
    };

    this.hotelService.createBooking(payload).subscribe({
      next: () => {
        this.bookingInProgress[roomId] = false;
        this.router.navigate(['/history']); // ✅ go to history
      },
      error: (err: HttpErrorResponse) => {
        console.log('Booking error:', err);
        this.bookingInProgress[roomId] = false;
        this.errorMsg = `Booking failed (status: ${err.status}).`;
      }
    });
  }
}