import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredAgentAnnualReportingComponent } from './registered-agent-annual-reporting.component';

describe('RegisteredAgentAnnualReportingComponent', () => {
  let component: RegisteredAgentAnnualReportingComponent;
  let fixture: ComponentFixture<RegisteredAgentAnnualReportingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisteredAgentAnnualReportingComponent]
    });
    fixture = TestBed.createComponent(RegisteredAgentAnnualReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
