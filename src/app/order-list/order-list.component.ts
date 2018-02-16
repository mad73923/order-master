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

  order_sum : number;

  deleteItem(item: OrderItem){
    let index = this.order.items.indexOf(item, 0);
    if(index > -1){
      this.order.items.splice(index, 1);
    }
    this.update_order_sum();
  }

  paid(){
    this.order.paid = true;
  }

  update_order_sum(){
    let erg = 0;
    this.order.items.forEach(element => {
      erg += element.price;
    });
    this.order_sum = erg;
  }

  constructor() { }

  ngOnInit() {
    this.update_order_sum();
  }

}
