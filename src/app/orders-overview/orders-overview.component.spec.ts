import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOverviewComponent } from './orders-overview.component';
import { OrdersOverviewRowComponent } from '../orders-overview-row/orders-overview-row.component';
import { OrderService } from '../order.service';
import { HttpClientModule } from '@angular/common/http';

describe('OrdersOverviewComponent', () => {
  let component: OrdersOverviewComponent;
  let fixture: ComponentFixture<OrdersOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersOverviewComponent, OrdersOverviewRowComponent ],
      providers: [OrderService],
      imports: [HttpClientModule]
    })
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
