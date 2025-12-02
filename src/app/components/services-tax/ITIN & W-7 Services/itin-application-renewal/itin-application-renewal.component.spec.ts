import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITINApplicationRenewalComponent } from './itin-application-renewal.component';

describe('ITINApplicationRenewalComponent', () => {
  let component: ITINApplicationRenewalComponent;
  let fixture: ComponentFixture<ITINApplicationRenewalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ITINApplicationRenewalComponent]
    });
    fixture = TestBed.createComponent(ITINApplicationRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
