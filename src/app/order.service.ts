import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from '../shared/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

const baseURI = 'http://localhost:4000/api/';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  get_Active_Orders(): Observable<Object> {
    const uri = baseURI + 'orders/active';
    return this.http.get(uri)
          .catch(err =>{
                err.message = "Couldn't get active orders. Check connection to database server.\n"+err.message;
                throw(err);
          });
  }

  new_Order(order: Order) {
    const uri = baseURI + 'orders/add';
    const obj = {
      date: order.date,
      paid: order.paid,
      items: order.items
    };
    // todo error handling not in service!
    this.http.post(uri, obj)
             .subscribe(res => {console.log(res)},
                        err => {console.log(err)});
  }

}
