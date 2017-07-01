import { Component, OnInit } from '@angular/core';
import { RoomService } from './room.service';
import { Room } from './room';
@Component({
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  rooms: Room[];
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().then( rooms => this.rooms = rooms);
  }

}
