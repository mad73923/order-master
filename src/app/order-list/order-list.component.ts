import { Component, OnInit } from '@angular/core';

import {mockOrder} from '../../mock/mock-order';
import { OrderItem } from '../../shared/order-item';
import {OrderClass} from '../model_classes/order_class'
import {mockConfig} from '../../mock/mock-config';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order: OrderClass;

  config = mockConfig;

  order_sum: number;

  deleteItem(item: OrderItem) {
    this.order.deleteItem(item);
  }

  paid() {
    this.order.pay();
  }

  update_order_sum() {
    this.order.update_order_sum();
  }

  add_item(item: OrderItem) {
    this.order.add_item(item);
  }

  constructor() {
    this.order = new OrderClass();
    this.order.items = [];
    this.order.paid = false;
   }

  ngOnInit() {
    this.update_order_sum();
  }

}
