import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { RoomService } from '../../room/room.service';
import { Room } from '../../room/room';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking-jumbotron',
  templateUrl: './booking-jumbotron.component.html',
  styleUrls: ['./booking-jumbotron.component.css'],
  providers: [ RoomService ]
})
export class BookingJumbotronComponent implements OnInit {
  rooms: Room[];
  checkInDate: DateModel;
  checkOutDate: DateModel;
  options: DatePickerOptions;
  constructor(private roomService: RoomService, private router: Router) {
    this.options = new DatePickerOptions();
    this.options.style = 'big';
    this.options.format = 'MMMM DD, YYYY';
    this.options.maxDate = new Date('2017/12/31');
   }

  ngOnInit() {
    this.roomService.getRooms().then(rooms => this.rooms = rooms);
  }

  goToRoomDetail(id: any) {
     this.router.navigate(['/room', id]);
  }

}
