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

  private orders: Order[];
  private relevantOrders: Order[];
  private relevantItems: OrderItem[];
  private number_items: number;

  constructor(private service: OrderService) { }

  ngOnInit() {
    this.updateOrders();
  }

  private updateOrders(){
    this.relevantOrders = [];
    this.relevantItems = [];
    this.number_items = 0;
    this.service.get_Active_Orders().subscribe(res =>{
      this.orders = res as Order[];
      this.filterOrders();      
    });
  }

  private filterOrders(){
    this.orders.forEach(order =>{
      if(this.isRelevantOrder(order)){
        this.relevantOrders.push(order);
      }
    });
  }

  private isRelevantOrder(order: Order): boolean{
    let ret = false;
    order.items.forEach(item => {
      if(this.isRelevantItem(item)){
        this.relevantItems.push(item);
        this.number_items += item.count;
        ret = true;
        return;
      }
    });
    return ret;
  }

  private isRelevantItem(item: OrderItem): boolean{
    let ret = false;
    if(this.stageNumber === 0 && item.stages.length === 0 ){
      return true;
    }
    if(this.get_maximum_stage(item.stages) === this.stageNumber -1){
      ret = true;
    }
    return ret;
  }

  private get_maximum_stage(stages): number{
    if(stages.length === 0){
      return -1;
    }
    let maxi = stages[0].id;
    stages.forEach(item => {
      maxi = Math.max(maxi, item.id);
    });
    return maxi;
  }

  private stageCompleted(item: OrderItem){
    item.stages.push({id: this.stageNumber, timestamp: Date.now()})
    this.service.update_item(item);
  }

}
