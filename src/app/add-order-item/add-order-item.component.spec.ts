import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AddOrderItemComponent } from './add-order-item.component';

describe('AddOrderItemComponent', () => {
  let component: AddOrderItemComponent;
  let fixture: ComponentFixture<AddOrderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ AddOrderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit event', (done) => {
    let test = {count: 5, name: 'test', price: 4.5};
    //TODO fix this
    component.count = 5;
    component.selectedItem = test;
    component.addItem.subscribe(e => {
      expect(e).toEqual(test);
      done();
    })
    component.addItemClicked();
  });
  it('should not decrement', () => {
    component.decrementCount();
    expect(component.count).toEqual(1);
  });

  it('should increment and decrement', () => {
    component.incrementCount();
    expect(component.count).toEqual(2);
    component.decrementCount();
    expect(component.count).toEqual(1);
  })
});
