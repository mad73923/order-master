import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageComponent } from './stage.component';
import { OrderService } from '../order.service';
import { Order } from '../../shared/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { OrderItem } from '../../shared/order-item';


class FakeService {
  new_Order(order: Order) {

  }

  get_Active_Orders(): Observable<Order[]> {
    return Observable.of([{id: 12, date: 1234, items: [{_id: 'swfhef', count: 1, name: 'pizza', price: 3.5, stages: []},
    {_id: 'swfhef', count: 1, name: 'pizza', price: 3.5, stages: [{id: 0, timestamp: 214823}]}], paid: false}]);
  }

  update_item(item: OrderItem) {

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

  it('should filter item stage 0', () => {
    component.stageNumber = 0;
    component.ngOnInit();
  });

  it('should filter item stage 1', () => {
    component.stageNumber = 1;
    component.ngOnInit();
  });

  it('should call update item', () => {
    component.stageNumber = 0;
    component.stageCompleted({_id: 'wfj', count: 1, name: 'pizza', price: 5.5, stages: []});
  });
});
