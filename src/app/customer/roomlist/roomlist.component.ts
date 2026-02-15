import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from '../../core/services/room.service';
import { BookingService } from '../../core/services/booking.service';
import { Room } from '../../core/models/room.model';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roomlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent {
  rooms: Room[] = [];

  constructor(private roomService: RoomService, private bookingService: BookingService) {
    this.rooms = this.roomService.getRooms();
  }

  book(roomId: number) {
    this.roomService.bookRoom(roomId);
    this.bookingService.addBooking({ id: Date.now(), userId: 0, roomId, date: new Date().toISOString() });
    this.rooms = this.roomService.getRooms();
  }
}
