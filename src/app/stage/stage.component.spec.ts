import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComponent } from './stage.component';
import { OrderService } from '../order.service';
import { Order } from '../../shared/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


class FakeService {
  new_Order(order: Order) {

  }

  get_Active_Orders(): Observable<Order[]> {
    return Observable.of();
  }
}

describe('StageComponent', () => {
  let component: StageComponent;
  let fixture: ComponentFixture<StageComponent>;

  beforeEach(async(() => {
    TestBed.overrideComponent(StageComponent, {set: {providers: [{provide: OrderService, useClass: FakeService}]}});
    TestBed.configureTestingModule({
      declarations: [ StageComponent ],
      providers: [OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
