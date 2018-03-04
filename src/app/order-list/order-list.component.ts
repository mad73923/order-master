import { Component, OnInit, Input } from '@angular/core';

import { OrderItem } from '../../shared/order-item';
import {OrderClass} from '../model_classes/order_class';
import {mockConfig} from '../../mock/mock-config';
import { OrderService } from '../order.service';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent extends OrderClass implements OnInit {

  @Input()
  editable: boolean;

  config = mockConfig;

  constructor(private service: OrderService) {
    super();
  }

  ngOnInit() {
    this.update_order_sum();
  }

  submit_order() {
    const new_items: OrderItem[] = [];
    const new_order: OrderClass = Object.assign({}, this);
    new_order.items.forEach(item => {
      const count = item.count;
      const new_item = Object.assign({}, item);
      new_item.count = 1;
      for (let i = 0; i < count; i++) {
        new_items.push(new_item);
      }
    });
    new_order.items = new_items;
    this.service.new_Order(new_order as Order);
  }

}
