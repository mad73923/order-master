import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOverviewComponent } from './orders-overview.component';
import { OrdersOverviewRowComponent } from '../orders-overview-row/orders-overview-row.component';
import { OrderService } from '../order.service';
import { Order } from '../../shared/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class fakeService{
  new_Order(order: Order){

  }

  get_Active_Orders():Observable<any>{
    return Observable.of();
  }
}

describe('OrdersOverviewComponent', () => {
  let component: OrdersOverviewComponent;
  let fixture: ComponentFixture<OrdersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.overrideComponent(OrdersOverviewComponent, {set:{providers:[{provide: OrderService, useClass: fakeService}]}});
    TestBed.configureTestingModule({
      declarations: [ OrdersOverviewComponent, OrdersOverviewRowComponent ],
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
