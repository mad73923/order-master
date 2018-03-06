import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../../shared/order';
import { OrderItem } from '../../shared/order-item';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  @Input()
  stageNumber: number;

  orders: Order[];
  number_items: number;

  constructor(private service: OrderService) {
    this.orders = [];
  }

  ngOnInit() {
    this.updateOrders();
  }

  private updateOrders() {
    this.number_items = 0;
    this.service.get_Active_Orders().subscribe(res => {
      this.orders = res as Order[];
      this.filterOrders();
    });
  }

  private filterOrders() {
    const new_orders = [];
    this.orders.forEach((order, index) => {
      this.filterItems(order);
      if (order.items.length > 0) {
        new_orders.push(order);
      }
    });
    this.orders = new_orders;
  }

  private filterItems(order: Order) {
    const new_items = [];
    order.items.forEach((item, index) => {
      if (this.isRelevantItem(item)) {
        this.number_items += item.count;
        new_items.push(item);
      }
    });
    order.items = new_items;
  }

  private isRelevantItem(item: OrderItem): boolean {
    if (this.stageNumber === 0 && item.stages.length === 0 ) {
      return true;
    }
    if (this.get_maximum_stage(item.stages) === this.stageNumber - 1) {
      return true;
    }
    return false;
  }

  private get_maximum_stage(stages): number {
    if (stages.length === 0) {
      return -1;
    }
    let maxi = stages[0].id;
    stages.forEach(item => {
      maxi = Math.max(maxi, item.id);
    });
    return maxi;
  }

  public stageCompleted(item: OrderItem) {
    item.stages.push({id: this.stageNumber, timestamp: Date.now()});
    this.service.update_item(item);
  }

}
