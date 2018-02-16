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

  delete(){
    this.onDelete.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
