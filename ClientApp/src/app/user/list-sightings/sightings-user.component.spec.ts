import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightingsUserComponent } from './sightings-user.component';

describe('SightingsUserComponent', () => {
  let component: SightingsUserComponent;
  let fixture: ComponentFixture<SightingsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightingsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightingsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
