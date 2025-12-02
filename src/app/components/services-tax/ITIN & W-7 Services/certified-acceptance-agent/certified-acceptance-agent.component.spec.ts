import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedAcceptanceAgentComponent } from './certified-acceptance-agent.component';

describe('CertifiedAcceptanceAgentComponent', () => {
  let component: CertifiedAcceptanceAgentComponent;
  let fixture: ComponentFixture<CertifiedAcceptanceAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertifiedAcceptanceAgentComponent]
    });
    fixture = TestBed.createComponent(CertifiedAcceptanceAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
