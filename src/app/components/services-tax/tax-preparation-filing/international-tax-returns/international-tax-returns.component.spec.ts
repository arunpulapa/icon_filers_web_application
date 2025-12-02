import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTaxReturnsComponent } from './international-tax-returns.component';

describe('InternationalTaxReturnsComponent', () => {
  let component: InternationalTaxReturnsComponent;
  let fixture: ComponentFixture<InternationalTaxReturnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalTaxReturnsComponent]
    });
    fixture = TestBed.createComponent(InternationalTaxReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
