import { Component, OnInit } from '@angular/core';
import { QuickService } from './quick.service';
import { NewAndEvent } from './new-and-event';
@Component({
  selector: 'app-quick',
  templateUrl: './quick.component.html',
  styleUrls: ['./quick.component.css'],
  providers: [ QuickService ]
})
export class QuickComponent implements OnInit {
  news: NewAndEvent[] = [];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

  constructor(private quickService: QuickService) {}
  ngOnInit() {
    this.quickService.getNewAndEvents().then( news => this.news = news);
  }

}
