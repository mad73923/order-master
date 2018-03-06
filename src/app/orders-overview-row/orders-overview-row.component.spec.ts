import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOverviewRowComponent } from './orders-overview-row.component';
import { Order } from '../../shared/order';

describe('OrdersOverviewRowComponent', () => {
  let component: OrdersOverviewRowComponent;
  let fixture: ComponentFixture<OrdersOverviewRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersOverviewRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersOverviewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the fields', () => {
    component.orderDiv = {id: 123, date: 23747, items: [{count: 2, name: 'Spaghetti', price: 4.6, _id: 'test', stages: []}], paid: false};
    component.ngOnInit();
  });
});
