import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../../core/services/room.service';
import { Room } from '../../core/models/room.model';

@Component({
  
  selector: 'app-manage-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent {
  rooms: Room[] = [];

  newRoom: Partial<Room> = {
    type: '',
    price: 0,
    availableRooms: 1
  };

  constructor(private roomService: RoomService) {
    this.rooms = this.roomService.getRooms();
  }

  addRoom() {
    if (!this.newRoom.type || !this.newRoom.price) return;

    const room: Room = {
      id: Date.now(),
      type: this.newRoom.type!,
      price: Number(this.newRoom.price),
      availableRooms: Number(this.newRoom.availableRooms) || 0
    };

    this.roomService.addRoom(room);
    this.rooms = this.roomService.getRooms();
    this.newRoom = { type: '', price: 0, availableRooms: 1 };
  }
}
