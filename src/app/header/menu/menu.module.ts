import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MenuComponent ],
  providers: [ MenuService ],
  exports: [ MenuComponent ]
})
export class MenuModule { }
