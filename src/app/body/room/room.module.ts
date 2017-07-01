import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { RoomService } from './room.service';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { BookingFormComponent } from './room-detail/booking-form/booking-form.component';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [RoomComponent, RoomDetailComponent, BookingFormComponent],
  providers: [RoomService]
})
export class RoomModule { }
