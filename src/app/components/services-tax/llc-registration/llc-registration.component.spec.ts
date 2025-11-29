import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLCRegistrationComponent } from './llc-registration.component';

describe('LLCRegistrationComponent', () => {
  let component: LLCRegistrationComponent;
  let fixture: ComponentFixture<LLCRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LLCRegistrationComponent]
    });
    fixture = TestBed.createComponent(LLCRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
