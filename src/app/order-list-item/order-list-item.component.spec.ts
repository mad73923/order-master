import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderListItemComponent } from './oder-list-item.component';

describe('OderListItemComponent', () => {
  let component: OderListItemComponent;
  let fixture: ComponentFixture<OderListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
