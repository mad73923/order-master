import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from '../shared/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { OrderItem } from '../shared/order-item';

import * as socketIo from 'socket.io-client';

const baseURI = 'http://localhost:4000/api/';

@Injectable()
export class OrderService {

  private socket;

  constructor(private http: HttpClient) {
    this.socket = socketIo('http://localhost:4000');
    this.socket.on('connect', () => {
      console.log('socketIO connected');
    });
    
  }

  on_update(): Observable<any>{
    return new Observable<any>(observer => {
      this.socket.on('update', () => {
        observer.next();
      });
    });
  }

  get_Active_Orders(): Observable<Object> {
    const uri = baseURI + 'orders/active';
    return this.http.get(uri)
          .catch(err => {
                err.message = 'Couldn\'t get active orders. Check connection to database server.\n' + err.message;
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
             .subscribe(res => {console.log(res); },
                        err => {console.log(err); });
  }

  stage_completed(item: OrderItem, stage: number) {
    const uri = baseURI + 'orders/stage';
    this.http.put(uri, {id: item['_id'], stage: stage})
              .subscribe(res => console.log(res), 
                        err => console.log(err));
  }

}
