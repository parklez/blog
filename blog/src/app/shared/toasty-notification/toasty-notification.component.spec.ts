import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastyNotificationComponent } from './toasty-notification.component';

describe('ToastyNotificationComponent', () => {
  let component: ToastyNotificationComponent;
  let fixture: ComponentFixture<ToastyNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastyNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastyNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
