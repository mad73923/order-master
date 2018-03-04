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

  ngOnInit() {
    this.update_fields();
  }

  ngOnDestroy() {
  }

}
