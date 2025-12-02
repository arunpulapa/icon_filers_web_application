import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTaxReturnsComponent } from './business-tax-returns.component';

describe('BusinessTaxReturnsComponent', () => {
  let component: BusinessTaxReturnsComponent;
  let fixture: ComponentFixture<BusinessTaxReturnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessTaxReturnsComponent]
    });
    fixture = TestBed.createComponent(BusinessTaxReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
