import { Component, OnInit } from '@angular/core';

import {mockOrder} from '../mock-order'
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order = mockOrder;

  deleteItem(item: OrderItem){
    let index = this.order.items.indexOf(item, 0);
    if(index > -1){
      this.order.items.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
