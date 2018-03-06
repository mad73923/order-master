import { TestBed, inject } from '@angular/core/testing';

import { UierrorHandlerService } from './uierror-handler.service';

describe('UierrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UierrorHandlerService]
    });
  });

  it('should be created', inject([UierrorHandlerService], (service: UierrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
