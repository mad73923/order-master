import { Component, OnInit, Input } from '@angular/core';
import {OrderItem} from '../order-item';

@Component({
  selector: '[apporderlistitem]',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {

  @Input('apporderlistitem')
  item: OrderItem;

  constructor() { }

  ngOnInit() {
  }

}
