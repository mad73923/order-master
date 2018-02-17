import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-in-decrement-buttons',
  templateUrl: './in-decrement-buttons.component.html',
  styleUrls: ['./in-decrement-buttons.component.css']
})
export class InDecrementButtonsComponent implements OnInit {

  @Output()
  decrement = new EventEmitter();

  @Output()
  increment = new EventEmitter();

  decrementClicked() {
    this.decrement.emit();
  }

  incrementClicked() {
    this.increment.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
