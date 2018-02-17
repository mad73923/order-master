import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InDecrementButtonsComponent } from './in-decrement-buttons.component';

describe('InDecrementButtonsComponent', () => {
  let component: InDecrementButtonsComponent;
  let fixture: ComponentFixture<InDecrementButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InDecrementButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InDecrementButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
