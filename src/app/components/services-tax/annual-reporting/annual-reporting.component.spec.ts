import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualReportingComponent } from './annual-reporting.component';

describe('AnnualReportingComponent', () => {
  let component: AnnualReportingComponent;
  let fixture: ComponentFixture<AnnualReportingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnualReportingComponent]
    });
    fixture = TestBed.createComponent(AnnualReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
