import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { OrderListItemComponent } from './order-list-item.component';

describe('OderListItemComponent', () => {
  let component: OrderListItemComponent;
  let fixture: ComponentFixture<OrderListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderListItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit delete event', (done) => {
    component.deleteClicked.subscribe(() =>{
      done();
    });
    component.delete();
  });
  it('should emit update event', (done) => {
    component.updateClicked.subscribe(() =>{
      done();
    });
    component.updated();
  });
  it('should increment item count', () => {
    component.itemDiv = {count: 1, name: 'test', price: 88};
    component.incrementCount();
    expect(component.itemDiv.count).toEqual(2);
  });
  it('should decrement item count', (done) => {
    component.itemDiv = {count: 2, name: 'test', price: 88};
    component.decrementCount();
    expect(component.itemDiv.count).toEqual(1);
    component.deleteClicked.subscribe(() =>{
      done();
    });
    component.decrementCount();
  });
});
