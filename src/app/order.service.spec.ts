import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class FakeHttpClientModule {
  post(): Observable<any> {
    return  Observable.of('test');
  }

  get() {
  }
}

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService, {provide: HttpClient, useClass: FakeHttpClientModule}]
    });
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));
  it('call members TODO error handling', inject([OrderService], (service: OrderService) => {
    service.get_Active_Orders();
    service.new_Order({id: 123, date: 6462, items: [], paid: false});
  }));
});
