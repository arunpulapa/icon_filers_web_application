import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessEntityTaxPlanningComponent } from './business-entity-tax-planning.component';

describe('BusinessEntityTaxPlanningComponent', () => {
  let component: BusinessEntityTaxPlanningComponent;
  let fixture: ComponentFixture<BusinessEntityTaxPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessEntityTaxPlanningComponent]
    });
    fixture = TestBed.createComponent(BusinessEntityTaxPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
