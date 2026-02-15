import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms: Room[] = [
    { id: 1, type: 'Single', price: 50, availableRooms: 5 },
    { id: 2, type: 'Double', price: 80, availableRooms: 3 },
    { id: 3, type: 'Suite', price: 150, availableRooms: 2 }
  ];

  getRooms(): Room[] {
    return this.rooms;
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }

  bookRoom(roomId: number) {
    const room = this.rooms.find(r => r.id === roomId);

    if (room && room.availableRooms > 0) {
      room.availableRooms--;
    }
  }
}
