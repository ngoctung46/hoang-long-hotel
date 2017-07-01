import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';

export const MENU: MenuItem[] = [
  { id: 1, name: 'Home', translatedName: 'Trang Chủ', url: 'home' },
  { id: 2, name: 'Rooms', translatedName: 'Xem Phòng', url: 'rooms'},
  // { id: 3, name: 'Offers', translatedName: 'Khuyến Mãi', url: 'offers' },
  // { id: 4, name: 'Porfolio', translatedName: 'Giới Thiệu', url: 'porfolio' },
  { id: 3, name: 'Contact', translatedName: 'Liên Hệ', url: 'contact'}
];
@Injectable()
export class MenuService {
  menu: MenuItem[] = MENU;
  constructor() { }
  getMenu(): Promise<MenuItem[]> {
    return Promise.resolve(this.menu);
  }
}
