import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { OrderListComponent } from './order-list.component';
import { OrderListItemComponent } from '../order-list-item/order-list-item.component';
import { OrderService } from '../order.service';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderListComponent, OrderListItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add a item', () => {
    component.add_item({count: 1, name: 'Pizza', price: 66});
    expect(component.items.length).toEqual(1);
  });
  it('should delete a item', () => {
    const test1 = {count: 1, name: 'Pizza', price: 66};
    const test2 = {count: 1, name: 'Pizza', price: 55};
    component.add_item(test1);
    // TODO dependency to test above
    expect(component.items.length).toEqual(1);
    component.deleteItem(test2);
    expect(component.items.length).toEqual(1);
    component.deleteItem(test1);
    expect(component.items.length).toEqual(0);
  });
  it('should mark the order as paid', () => {
    expect(component.paid).toEqual(false);
    component.pay();
    expect(component.paid).toEqual(true);
  });
});
