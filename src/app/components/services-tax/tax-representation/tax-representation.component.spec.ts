import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRepresentationComponent } from './tax-representation.component';

describe('TaxRepresentationComponent', () => {
  let component: TaxRepresentationComponent;
  let fixture: ComponentFixture<TaxRepresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxRepresentationComponent]
    });
    fixture = TestBed.createComponent(TaxRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
