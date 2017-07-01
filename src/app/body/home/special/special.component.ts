import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  message: string;
  translatedMessage: string;
  constructor() { }

  ngOnInit() {
    this.message = `
      Exclusive deal for regular customers. Get 10% off for your next visit. We highly appreciate your business with us.
    `;
    this.message = `
      Khuyến mãi đặc biệt cho khách hàng thân quen. Giảm 10% cho lần ghé thăm khách sạn tiếp theo. Chúng tôi xin cảm ơn các
      bạn đã ủng hộ và tin tưởng vào khách sạn Hoàng Long. Rất hân hạnh được phục vụ!
    `;
  }

}
