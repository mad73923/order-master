import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOverviewComponent } from './orders-overview.component';
import { OrdersOverviewRowComponent } from '../orders-overview-row/orders-overview-row.component';
import { OrderService } from '../order.service';
import { Order } from '../../shared/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { WaitingTimeComponent } from '../waiting-time/waiting-time.component';

class FakeService {
  new_Order(order: Order) {

  }

  get_Active_Orders(): Observable<Order[]> {
    return Observable.of([{id: 123, date: 434, items: [], paid: false}]);
  }
}

describe('OrdersOverviewComponent', () => {
  let component: OrdersOverviewComponent;
  let fixture: ComponentFixture<OrdersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.overrideComponent(OrdersOverviewComponent, {set: {providers: [{provide: OrderService, useClass: FakeService}]}});
    TestBed.configureTestingModule({
      declarations: [ OrdersOverviewComponent, OrdersOverviewRowComponent, WaitingTimeComponent ],
      providers: [OrderService]})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
