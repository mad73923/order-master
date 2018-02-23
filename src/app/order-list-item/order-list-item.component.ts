import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {OrderItem} from '../../shared/order-item';

@Component({
  // tslint:disable-next-line
  selector: '[itemDiv]',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {

  @Input()
  itemDiv: OrderItem;

  @Input()
  editable: boolean;

  @Output()
  deleteClicked = new EventEmitter();

  @Output()
  updateClicked = new EventEmitter();

  updated() {
    this.updateClicked.emit();
  }

  delete() {
    this.deleteClicked.emit();
  }

  incrementCount() {
    this.itemDiv.count ++;
    this.updated();
  }

  decrementCount() {
    if (this.itemDiv.count > 1) {
      this.itemDiv.count --;
      this.updated();
    } else {
      this.delete();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
