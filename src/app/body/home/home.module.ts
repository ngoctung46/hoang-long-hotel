import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingJumbotronComponent } from './booking-jumbotron/booking-jumbotron.component';
import { HomeComponent } from './home.component';
import { HodComponent } from './hod/hod.component';
import { TelComponent } from './tel/tel.component';
import { SpecialComponent } from './special/special.component';
import { QuickComponent } from './quick/quick.component';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DatePickerModule
  ],
  declarations: [
    BookingJumbotronComponent,
    HomeComponent,
    HodComponent,
    TelComponent,
    SpecialComponent,
    QuickComponent

  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
