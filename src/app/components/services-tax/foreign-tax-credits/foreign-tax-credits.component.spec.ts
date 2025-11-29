import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignTaxCreditsComponent } from './foreign-tax-credits.component';

describe('ForeignTaxCreditsComponent', () => {
  let component: ForeignTaxCreditsComponent;
  let fixture: ComponentFixture<ForeignTaxCreditsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeignTaxCreditsComponent]
    });
    fixture = TestBed.createComponent(ForeignTaxCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
