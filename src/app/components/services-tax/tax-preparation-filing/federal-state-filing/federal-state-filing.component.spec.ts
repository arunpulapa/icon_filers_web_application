import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FederalStateFilingComponent } from './federal-state-filing.component';

describe('FederalStateFilingComponent', () => {
  let component: FederalStateFilingComponent;
  let fixture: ComponentFixture<FederalStateFilingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FederalStateFilingComponent]
    });
    fixture = TestBed.createComponent(FederalStateFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
