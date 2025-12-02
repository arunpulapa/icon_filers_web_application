import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GENERALADVISORYComponent } from './general-advisory.component';

describe('GENERALADVISORYComponent', () => {
  let component: GENERALADVISORYComponent;
  let fixture: ComponentFixture<GENERALADVISORYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GENERALADVISORYComponent]
    });
    fixture = TestBed.createComponent(GENERALADVISORYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
