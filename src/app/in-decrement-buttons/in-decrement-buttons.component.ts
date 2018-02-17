import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-in-decrement-buttons',
  templateUrl: './in-decrement-buttons.component.html',
  styleUrls: ['./in-decrement-buttons.component.css']
})
export class InDecrementButtonsComponent implements OnInit {

  @Output()
  onDecrement = new EventEmitter();

  @Output()
  onIncrement = new EventEmitter();

  decrementClicked(){
    this.onDecrement.emit();
  }

  incrementClicked(){
    this.onIncrement.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
