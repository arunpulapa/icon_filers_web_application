import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EINStateRegistrationsComponent } from './ein-state-registrations.component';

describe('EINStateRegistrationsComponent', () => {
  let component: EINStateRegistrationsComponent;
  let fixture: ComponentFixture<EINStateRegistrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EINStateRegistrationsComponent]
    });
    fixture = TestBed.createComponent(EINStateRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
