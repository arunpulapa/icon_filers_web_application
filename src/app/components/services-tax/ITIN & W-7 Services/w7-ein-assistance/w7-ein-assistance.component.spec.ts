import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W7EINAssistanceComponent } from './w7-ein-assistance.component';

describe('W7EINAssistanceComponent', () => {
  let component: W7EINAssistanceComponent;
  let fixture: ComponentFixture<W7EINAssistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [W7EINAssistanceComponent]
    });
    fixture = TestBed.createComponent(W7EINAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
