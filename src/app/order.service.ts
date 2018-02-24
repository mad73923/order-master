import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from '../shared/order';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  activeOrders: Order[];

  constructor(private http: HttpClient) {
    this.activeOrders = [];
    this.activeOrders.push({id: 1234, date: Date.now(), paid: true, items: [{count: 3, name: 'Döner', price: 4.5},
    {count: 1, name: 'Pizza', price: 4.5}]});
    this.activeOrders.push({id: 634, date: Date.now(), paid: true, items: [{count: 2, name: 'Pizza', price: 4.5}]});
  }

  get_Active_Orders(): Observable<Object> {
    const uri = 'http://localhost:4000/api/orders/active';
    return this.http.get(uri);
  }

  new_Order(order: Order) {
    const uri = 'http://localhost:4000/api/orders/add';
    const obj = {
      id: order.id,
      date: order.date,
      paid: order.paid,
      items: order.items
    };
    this.http.post(uri, obj)
             .subscribe(res => console.log(res));
  }

}
