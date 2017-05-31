import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';

export const MENU: MenuItem[] = [
  { id: 1, name: 'Home', url: 'home' },
  { id: 2, name: 'Rooms', url: 'rooms'},
  { id: 3, name: 'Offers', url: 'offers' },
  { id: 4, name: 'Porfolio', url: 'porfolio' },
  { id: 5, name: 'Contact', url: 'contact'}
];
@Injectable()
export class MenuService {
  menu: MenuItem[] = MENU;
  constructor() { }
  getMenu(): Promise<MenuItem[]> {
    return Promise.resolve(this.menu);
  }
}
