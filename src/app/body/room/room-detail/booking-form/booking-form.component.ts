import { Component, OnInit } from '@angular/core';
import { BookingData } from './booking-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  bookingList: FirebaseListObservable<BookingData[]>;
  data: BookingData = new BookingData();
  options: number[] = [];
  months: string[] = [];
  constructor(db: AngularFireDatabase) {
    this.bookingList = db.list('/booking-data');
  }

  ngOnInit() {
    this.generateOptions();
    this.generateMonths();
  }

  generateOptions(): void {
    for (let index = 1; index <= 31; index++) {
      this.options.push(index);
    }
  }

  generateMonths(): void {
    this.months.push('Jan - Một', 'Feb - Hai', 'Mar - Ba', 'Apr - Bốn', 'May - Năm', 'Jun - Sáu',
                   'Jul - Bảy', 'Aug - Tám', 'Sep - Chín', 'Oct - Mười', 'Nov - Mười Một', 'Dec - Mười Hai');
  }

  // get diagnostic(){return JSON.stringify(this.data); }

  onSubmit(): void {
    this.bookingList.push(this.data);
  }
}
