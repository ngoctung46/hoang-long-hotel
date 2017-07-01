import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'rooms', component: RoomComponent },
    { path: 'room/:id', component: RoomDetailComponent },
    { path: 'contact', component: ContactComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BodyRoutingModule { }
