import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBARFATCAComplianceComponent } from './fbar-fatca-compliance.component';

describe('FBARFATCAComplianceComponent', () => {
  let component: FBARFATCAComplianceComponent;
  let fixture: ComponentFixture<FBARFATCAComplianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FBARFATCAComplianceComponent]
    });
    fixture = TestBed.createComponent(FBARFATCAComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
