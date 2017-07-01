import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../header/menu/menu-item';
import { MenuService } from '../header/menu/menu.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ MenuService ]
})
export class FooterComponent implements OnInit {
  menu: MenuItem[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getMenu().then( menu => this.menu = menu);
  }

}
