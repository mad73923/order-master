import { Component, OnInit, Input } from '@angular/core';

import {mockOrder} from '../../mock/mock-order';
import { OrderItem } from '../../shared/order-item';
import {OrderClass} from '../model_classes/order_class';
import {mockConfig} from '../../mock/mock-config';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent extends OrderClass implements OnInit {

  @Input()
  editable: boolean;

  config = mockConfig;

  constructor(service: OrderService) {
    super();
  }

  ngOnInit() {
    this.update_order_sum();
  }

}
