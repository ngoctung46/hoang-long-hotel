import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdMenuModule,
  MdButtonModule,
  MdIconModule,
  MdToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdMenuModule,
    MdButtonModule,
    MdToolbarModule
  ],
  exports: [
    MdMenuModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule
  ]
})
export class AngularMaterialModule { }
