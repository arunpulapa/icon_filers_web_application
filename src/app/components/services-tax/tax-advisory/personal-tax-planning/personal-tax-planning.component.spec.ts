import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTaxPlanningComponent } from './personal-tax-planning.component';

describe('PersonalTaxPlanningComponent', () => {
  let component: PersonalTaxPlanningComponent;
  let fixture: ComponentFixture<PersonalTaxPlanningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalTaxPlanningComponent]
    });
    fixture = TestBed.createComponent(PersonalTaxPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
