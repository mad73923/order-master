import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {OrderItem} from '../order-item';

@Component({
  selector: '[apporderlistitem]',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {

  @Input('apporderlistitem')
  item: OrderItem;

  @Output()
  onDelete = new EventEmitter();

  @Output()
  onUpdate = new EventEmitter();

  updated(){
    this.onUpdate.emit();
  }

  delete(){
    this.onDelete.emit();
  }

  incrementCount(){
    this.item.count ++;
    this.updated();
  }

  decrementCount(){
    if(this.item.count>1){
      this.item.count --;
      this.updated();
    }else{
      this.delete();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
