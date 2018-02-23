import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../shared/order';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: '[orderDiv]',
  templateUrl: './orders-overview-row.component.html',
  styleUrls: ['./orders-overview-row.component.css']
})
export class OrdersOverviewRowComponent implements OnInit {

  @Input()
  orderDiv: Order;

  sum: number;
  number_items: number;
  waiting_time: number;

  constructor() { 
  }

  private update_fields(){
    this.sum = 0;
    this.number_items = 0;    
    this.orderDiv.items.forEach((item) => {
      this.sum += item.count * item.price;
      this.number_items += item.count;
    });
  }

  ngOnInit() {
    this.update_fields();
    this.waiting_time = 0;
  }

}
