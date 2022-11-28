import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSightingComponent } from './create-sighting.component';

describe('CreateSightingComponent', () => {
  let component: CreateSightingComponent;
  let fixture: ComponentFixture<CreateSightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSightingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
