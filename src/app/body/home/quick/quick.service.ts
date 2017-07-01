import { Injectable } from '@angular/core';
import { NewAndEvent } from './new-and-event';
const NEWANDEVENTS: NewAndEvent[] = [
  { date: new Date('June 4, 2017'), message: 'Sale 10% of entire bill', translatedMessage: 'Giảm 10% cho toàn bộ chi phí của bạn'},
  { date: new Date('June 16, 2017'), message: 'Stay 3 night and get 1 night free', translatedMessage: 'Ở 3 đêm được 1 đêm miễn phí'},
]
@Injectable()
export class QuickService {

  constructor() { }

  getNewAndEvents(): Promise<NewAndEvent[]> {
    return Promise.resolve(NEWANDEVENTS);
  }

}
