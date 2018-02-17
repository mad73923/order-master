import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {mockConfig } from '../mock-config';
import { OrderItem } from '../order-item';

@Component({
  selector: 'app-add-order-item',
  templateUrl: './add-order-item.component.html',
  styleUrls: ['./add-order-item.component.css']
})
export class AddOrderItemComponent implements OnInit {

  @Output()
  addItem = new EventEmitter();

  count = 1;
  config = mockConfig;

  selectedItem: any;

  addItemClicked() {
    const item = {count: this.count,
      name: this.selectedItem.name,
      price: this.selectedItem.price};
    this.addItem.emit(item);
  }

  decrementCount() {
    if (this.count > 1) {
      this.count --;
    }
  }

  incrementCount() {
    this.count ++;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
