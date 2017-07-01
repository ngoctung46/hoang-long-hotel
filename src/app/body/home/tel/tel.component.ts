import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../room/room.service';
import { Room } from '../../room/room';
@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.css'],
  providers: [ RoomService ]
})
export class TelComponent implements OnInit {
  rooms: Room[] = [];
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms()
                    .then(rooms => this.rooms = rooms);
  }

}
