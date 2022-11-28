import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSightingComponent } from './update-sighting-admin.component';

describe('UpdateSightingComponent', () => {
  let component: UpdateSightingComponent;
  let fixture: ComponentFixture<UpdateSightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSightingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
