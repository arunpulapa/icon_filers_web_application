import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITINPreparationComponent } from './itin-preparation.component';

describe('ITINPreparationComponent', () => {
  let component: ITINPreparationComponent;
  let fixture: ComponentFixture<ITINPreparationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ITINPreparationComponent]
    });
    fixture = TestBed.createComponent(ITINPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
