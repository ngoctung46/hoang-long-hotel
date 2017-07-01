import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { RoomModule } from './room/room.module';
import { BodyComponent } from './body.component';
import { BodyRoutingModule } from './body-routing.module';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    RoomModule,
    BodyRoutingModule
  ],
  declarations: [
    BodyComponent,
    ContactComponent
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule { }
