import { Injectable } from '@angular/core';
import { Order } from '../shared/order';

@Injectable()
export class OrderService {

  activeOrders: Order[];

  constructor() { 
    this.activeOrders = [];
    this.activeOrders.push({id: 1234, date: Date.now(), paid: true, items:[{count: 3, name: 'Döner', price: 4.5}, {count: 1, name: 'Pizza', price: 4.5}]});
    this.activeOrders.push({id: 634, date: Date.now(), paid: true, items:[{count: 2, name: 'Pizza', price: 4.5}]});
  }

  get_Active_Orders(): Order[]{
    return this.activeOrders;
  }

  new_Order(order: Order){
    this.activeOrders.push(order);
  }

}
