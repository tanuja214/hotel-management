import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../core/services/booking.service';
import { RoomService } from '../../core/services/room.service';

@Component({
  standalone: true,
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrls: ['./history.css'],
})
export class HistoryComponent {
  bookings = [] as any[];

  constructor(private bookingService: BookingService, private roomService: RoomService) {
    this.load();
  }

  load() {
    const b = this.bookingService.getBookings();
    this.bookings = b.map(x => {
      const room = this.roomService.getRooms().find(r => r.id === x.roomId);
      return {
        ...x,
        roomType: room?.type || 'Unknown',
        price: room?.price || 0
      };
    });
  }
}
