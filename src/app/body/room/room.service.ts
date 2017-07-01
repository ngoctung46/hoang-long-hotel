import { Injectable } from '@angular/core';
import { Room } from './room';

export const ROOMS: Room[] = [
  {
    id: 1,
    price: 18,
    name: 'Single Room',
    translatedName: 'Phòng Đơn',
    summary: `
      Comfortable room nicely decorated. 
      Single rooms are equipped with shower
      and some of them with balcony overlooking city nightlife. 
      Each room is air conditioned and has a flat-screen TV with over hundreds TV channels, 
      one queen size bed and spacious wardrobe.
    `,
    translatedSummary: `
      Phòng đơn thoải mái với kiến trúc đẹp. 
      Được trang bị nhà tắm kết hợp với ban-công để có thể quan sát
      cuộc sống về đêm của thành phố.
      Phòng được trang bị đầy đủ tiện nghi với máy lạnh, tivi màn hình phẳng
      với hơn 100 kênh giải trí trong và ngoài nước.Ngoài ra, phòng được
      trang bị một giường cỡ đại với tủ quần áo rộng rãi
    `,
    offer: 'Booking single room online, save 2 euro and skip the long line!',
    translatedOffer: 'Đặt phòng online để tiết kiệm được 5% và không lo về chỗ ở',
    offerDuration: 'From 31 May, 2017 To 31 May, 2018',
    description: `
      <h2>Included</h2>
      <ul>
        <li> Kids under 5: free </li>
        <li> Free Laundry </li>
        <li> 01 double room with 02 standard-size bed room</li>
        <li> Eary Check-In and late Check Out is acceptable</li>
      </ul>
      Welcome to our hotel! Thanks for your business.
    `,
    translatedDescription: `
      <h2> Bao Gồm </h2>
      <ul>
        <li> Miễn phụ thu cho trẻ em dưới 5 tuổi</li>
        <li> Miễn phí chi phí giặt ủi</li>
        <li> 01 phòng đơn rộng rãi với 01 giường lớn</li>
        <li> Nhận phòng sau 12h hôm trước và trả phòng trước 12h ngày kế tiếp</li>
      </ul>
      Khách sạn Hoàng Long rất hân hạnh được phục vụ quý khách
    `,
    imageUrls: ['assets/images/single_room.jpg']
  },
  {
    id: 2,
    price: 22,
    name: 'Double Room',
    translatedName: 'Giường Đôi',
    summary: `
      Comfortable room nicely decorated. 
      Double-bed rooms are equipped with shower
      and some of them with balcony overlooking city nightlife. 
      Each room is air conditioned and has a flat-screen TV with over hundreds TV channels, 
      two queen size bed and spacious wardrobe.
    `,
    translatedSummary: `
      Phòng đôi 02 giường thoải mái với kiến trúc đẹp. 
      Được trang bị nhà tắm kết hợp với ban-công để có thể quan sát
      cuộc sống về đêm của thành phố.
      Phòng được trang bị đầy đủ tiện nghi với máy lạnh, tivi màn hình phẳng
      với hơn 100 kênh giải trí trong và ngoài nước.Ngoài ra, phòng được
      trang bị hai giường cỡ đại với tủ quần áo rộng rãi
    `,
    offer: '10% off for booking online',
    translatedOffer: 'Giảm giá 10% cho khách hàng đặt qua mạng',
    offerDuration: 'From 31 May, 2017 To 31 May, 2018',
    description: `
      <h2>Included</h2>
      <ul>
        <li> Kids under 5: free </li>
        <li> Free Laundry </li>
        <li> 01 single room with 01 standard-size bed room</li>
        <li> Eary Check-In and late Check Out is acceptable</li>
      </ul>
      Welcome to our hotel! Thanks for your business.
    `,
    translatedDescription: `
      <h2> Bao Gồm </h2>
      <ul>
        <li> Miễn phụ thu cho trẻ em dưới 5 tuổi</li>
        <li> Miễn phí chi phí giặt ủi</li>
        <li> 01 phòng đơn rộng rãi với 01 giường lớn</li>
        <li> Nhận phòng sau 12h hôm trước và trả phòng trước 12h ngày kế tiếp</li>
      </ul>
      Khách sạn Hoàng Long rất hân hạnh được phục vụ quý khách
    `,
    imageUrls: ['assets/images/double_room.jpg']
  }
];
@Injectable()
export class RoomService {
  rooms: Room[] = ROOMS;
  constructor() { }
  getRooms(): Promise<Room[]> {
    return Promise.resolve(this.rooms);
  };
  getRoom(id: number): Promise<Room>{
    return this.getRooms()
              .then(rooms => rooms
              .find(room => room.id === id));
  }
}
