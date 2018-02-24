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

  it('should update the waiting time every second', (done) => {
    component.obs.subscribe(() => {
      done();
    });
  });
});