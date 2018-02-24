import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from '../shared/order';
import { Observable } from 'rxjs/Observable';

const baseURI = 'http://localhost:4000/api/';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  get_Active_Orders(): Observable<Object> {
    const uri = baseURI+ 'orders/active';
    return this.http.get(uri);
  }

  new_Order(order: Order) {
    const uri = baseURI + 'orders/add';
    const obj = {
      date: order.date,
      paid: order.paid,
      items: order.items
    };
    this.http.post(uri, obj)
             .subscribe(res => console.log(res));
  }

}
