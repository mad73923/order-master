import { Component, OnInit, Input } from '@angular/core';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-waiting-time',
  templateUrl: './waiting-time.component.html',
  styleUrls: ['./waiting-time.component.css']
})
export class WaitingTimeComponent implements OnInit {

  @Input()
  waitingSince: number;

  waiting_time: number;
  private obs: any;

  constructor() { }

  private update_waiting_time() {
    this.waiting_time = Date.now() - this.waitingSince;
  }

  ngOnInit() {
    this.update_waiting_time();
    this.obs = IntervalObservable.create(1000);
    this.obs.subscribe(() => {
      this.update_waiting_time();
    });
  }

}
