import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLCCorporationFormationComponent } from './llc-corporation-formation.component';

describe('LLCCorporationFormationComponent', () => {
  let component: LLCCorporationFormationComponent;
  let fixture: ComponentFixture<LLCCorporationFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LLCCorporationFormationComponent]
    });
    fixture = TestBed.createComponent(LLCCorporationFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
