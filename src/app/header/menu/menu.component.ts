import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { MenuItem } from './menu-item';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: MenuItem[];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu().then( menu => this.menu = menu);
  }

}
