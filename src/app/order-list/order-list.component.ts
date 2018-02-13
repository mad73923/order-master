import { Component, OnInit } from '@angular/core';

import {mockOrder} from '../mock-order'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order = mockOrder;

  constructor() { }

  ngOnInit() {
  }

}
