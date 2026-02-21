import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-manage-rooms',
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-rooms.component.html',
  styleUrls: ['./manage-rooms.component.css']
})
export class ManageRoomsComponent implements OnInit {

  rooms: any[] = [];

  newRoom = {
    type: '',
    price: 0,
    availableRooms: 0
  };

  ngOnInit(): void {
    this.rooms = [
      { type: 'Single Room', price: 1000, availableRooms: 5 },
      { type: 'Double Room', price: 2000, availableRooms: 3 },
      { type: 'Suite Room', price: 4000, availableRooms: 2 }
    ];
  }

  addRoom() {
    if (
      this.newRoom.type &&
      this.newRoom.price > 0 &&
      this.newRoom.availableRooms >= 0
    ) {
      this.rooms.push({ ...this.newRoom });

      // Reset form
      this.newRoom = {
        type: '',
        price: 0,
        availableRooms: 0
      };
    }
  }

  get sortedRooms() {
    return [...this.rooms].sort((a, b) => a.price - b.price);
  }
}
