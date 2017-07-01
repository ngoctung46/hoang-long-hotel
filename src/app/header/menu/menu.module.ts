import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ MenuComponent ],
  providers: [ MenuService ],
  exports: [ MenuComponent ]
})
export class MenuModule { }
