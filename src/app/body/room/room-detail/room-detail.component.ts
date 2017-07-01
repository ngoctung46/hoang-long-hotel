import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room: Room;
  constructor(
     private route: ActivatedRoute,
      private router: Router,
      private service: RoomService,
      private location: Location
  ) { }

  ngOnInit() {
     this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.service.getRoom(+params['id']))
    .subscribe((room: Room) => this.room = room);
  }
}
