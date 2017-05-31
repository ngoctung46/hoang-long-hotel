import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingJumbotronComponent } from './booking-jumbotron.component';

describe('BookingJumbotronComponent', () => {
  let component: BookingJumbotronComponent;
  let fixture: ComponentFixture<BookingJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
