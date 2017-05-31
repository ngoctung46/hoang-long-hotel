import { HoangLongHotelPage } from './app.po';

describe('hoang-long-hotel App', () => {
  let page: HoangLongHotelPage;

  beforeEach(() => {
    page = new HoangLongHotelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
