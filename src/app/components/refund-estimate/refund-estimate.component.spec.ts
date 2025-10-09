import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundEstimateComponent } from './refund-estimate.component';

describe('RefundEstimateComponent', () => {
  let component: RefundEstimateComponent;
  let fixture: ComponentFixture<RefundEstimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefundEstimateComponent]
    });
    fixture = TestBed.createComponent(RefundEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
