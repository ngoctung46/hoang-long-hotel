import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BodyComponent } from './body.component';
@NgModule({
  imports: [
    CommonModule,
    HomeModule
  ],
  declarations: [
    BodyComponent
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule { }
