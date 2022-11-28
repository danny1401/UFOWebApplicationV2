import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedAdminComponent } from './feed-admin.component';

describe('FeedAdminComponent', () => {
  let component: FeedAdminComponent;
  let fixture: ComponentFixture<FeedAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
