import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { OrderListComponent } from './order-list.component';
import { OrderListItemComponent } from '../order-list-item/order-list-item.component';
import { OrderService } from '../order.service';
import { Order } from '../../shared/order';

class FakeService {
  new_Order(order: Order) {

  }

  get_Active_Orders() {

  }
}
const mockDiv = {count: 1, name: 'test', price: 88, _id: '123', stages: []};

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.overrideComponent(OrderListComponent, {set: {providers: [{provide: OrderService, useClass: FakeService}]}});
    TestBed.configureTestingModule({
      declarations: [ OrderListComponent, OrderListItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [OrderService]})
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
    component.add_item(mockDiv);
    expect(component.items.length).toEqual(1);
    component.add_item(mockDiv);
    expect(component.items.length).toEqual(2);
  });
  it('should delete a item', () => {
    component.add_item(mockDiv);
    expect(component.items.length).toEqual(1);
    component.deleteItem(mockDiv);
    expect(component.items.length).toEqual(0);
    component.deleteItem(mockDiv);
    expect(component.items.length).toEqual(0);
  });
  it('should mark the order as paid', () => {
    expect(component.paid).toEqual(false);
    component.pay();
    expect(component.paid).toEqual(true);
  });
  it('should call service new order', () => {
    component.items = [mockDiv];
    component.submit_order();
  });
});
