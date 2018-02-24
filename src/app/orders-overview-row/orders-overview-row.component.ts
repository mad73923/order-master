import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../../shared/order';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

@Component({
  // tslint:disable-next-line
  selector: '[orderDiv]',
  templateUrl: './orders-overview-row.component.html',
  styleUrls: ['./orders-overview-row.component.css']
})
export class OrdersOverviewRowComponent implements OnInit, OnDestroy {

  @Input()
  orderDiv: Order;

  sum: number;
  number_items: number;
  waiting_time: number;

  obs: any;

  constructor() {
  }

  private update_fields() {
    this.sum = 0;
    this.number_items = 0;
    if (this.orderDiv.items) {
      this.orderDiv.items.forEach((item) => {
        this.sum += item.count * item.price;
        this.number_items += item.count;
      });
    }
  }

  private update_waiting_time(){
    this.waiting_time = Date.now() - this.orderDiv.date;
  }

  ngOnInit() {
    this.update_fields();
    this.update_waiting_time();
    this.obs = IntervalObservable.create(1000);
    this.obs.subscribe(() => {
      this.update_waiting_time();
    });
  }

  ngOnDestroy() {
    this.obs.unsubscribe();
  }

}
