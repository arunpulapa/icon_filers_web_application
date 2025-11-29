import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignOwnedUSEntitiesComponent } from './foreign-owned-us-entities.component';

describe('ForeignOwnedUSEntitiesComponent', () => {
  let component: ForeignOwnedUSEntitiesComponent;
  let fixture: ComponentFixture<ForeignOwnedUSEntitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForeignOwnedUSEntitiesComponent]
    });
    fixture = TestBed.createComponent(ForeignOwnedUSEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
