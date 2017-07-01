import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HodComponent implements OnInit {
  title: string;
  message: string;
  translatedTitle: string;
  translatedMessage: string;
  useMessage: string;
  constructor() { }

  ngOnInit() {
    this.title = `THE COMFORTS OF HOME`;
    this.translatedTitle = `THOẢI MÁI NHƯ Ở NHÀ VỚI KHÁCH SẠN HOÀNG LONG`;
    this.message = `    
    <The front desk is open from 7 AM to 12 PM Monday through Sunday
    Our hotel feature a comfortable sleeping area and fully equipped bathroom, complete with:
    <ul>
      <li>Large Room with makeup table and refrigerator</li>
      <li>Free laundry</li>
      <li>Free Wifi</li>
      <li>Multi-Channel TV with expanded cable (ESPN/ESPN 2, CNN, Weather Channel, TBS, Discovery Channel and others)</li>   
      <li>Friednly Staff</li>
      <li>Located in a Foreign Area, 1 km to the airport, 3 km to city center</li> 
    <ul>
    The front desk is open from 7 AM to 12 PM Monday through Sunday
    `;
    this.translatedMessage = `
    Khách sạn chúng tôi có phòng ngủ rộng rãi, thoái mái với phòng tắm được trang bị đầy đủ và có các tiện nghi sau:
    <ul>
      <li>Phòng lớn với bàn ăn, bàn trang điểm, và tủ lạnh</li>
      <li>Miễn phí giặt sấy</li>
      <li>Miễn phí Wifi</li>
      <li>Tivi Màn hình phẳng Với nhiều Kênh Đa Dạng</li>   
      <li>Nhân viên thân thiện, mến khách</li>
      <li>Tọa lạc tại địa điểm lý tưởng, gần sân bay và trung tâm thành phố</li> 
    <ul>
    Khách sạn mở cửa các ngày trong tuần từ 7 giờ sáng tới 12 giờ đêm.    
    `;
  }

}
