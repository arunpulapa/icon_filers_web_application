import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendmentFilingComponent } from './amendment-filing.component';

describe('AmendmentFilingComponent', () => {
  let component: AmendmentFilingComponent;
  let fixture: ComponentFixture<AmendmentFilingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmendmentFilingComponent]
    });
    fixture = TestBed.createComponent(AmendmentFilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
