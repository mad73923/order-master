import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  @Input()
  stageNumber: number;

  private orders: Order[];

  constructor(private service: OrderService) { }

  ngOnInit() {
    this.service.get_Active_Orders().subscribe(res =>{
      this.orders = res as Order[];
    });
  }

}
