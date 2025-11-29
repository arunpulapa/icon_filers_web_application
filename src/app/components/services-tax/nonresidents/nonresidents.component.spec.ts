import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonresidentsComponent } from './nonresidents.component';

describe('NonresidentsComponent', () => {
  let component: NonresidentsComponent;
  let fixture: ComponentFixture<NonresidentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonresidentsComponent]
    });
    fixture = TestBed.createComponent(NonresidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
