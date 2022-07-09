import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutWeekComponent } from './workout-week.component';

describe('WorkoutWeekComponent', () => {
  let component: WorkoutWeekComponent;
  let fixture: ComponentFixture<WorkoutWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
