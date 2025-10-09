import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTaxPlanningComponent } from './advanced-tax-planning.component';

describe('AdvancedTaxPlanningComponent', () => {
  let component: AdvancedTaxPlanningComponent;
  let fixture: ComponentFixture<AdvancedTaxPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedTaxPlanningComponent]
    });
    fixture = TestBed.createComponent(AdvancedTaxPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
