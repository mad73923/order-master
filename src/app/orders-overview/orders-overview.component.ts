import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders-overview',
  templateUrl: './orders-overview.component.html',
  styleUrls: ['./orders-overview.component.css']
})
export class OrdersOverviewComponent implements OnInit {

  orders: Order[];

  constructor(private service: OrderService) {
   }

  ngOnInit() {
    this.service.get_Active_Orders().subscribe(res => {
      this.orders = res as Order[];
    }, err =>{
      console.log(err);
    });
  }

}
