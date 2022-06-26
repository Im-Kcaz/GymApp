import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutScheduleComponent } from './workout-schedule.component';

describe('WorkoutScheduleComponent', () => {
  let component: WorkoutScheduleComponent;
  let fixture: ComponentFixture<WorkoutScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should focus', () => {
    fixture = TestBed.createComponent(WorkoutScheduleComponent);
    component = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.querySelector('div'));
  // expect(compiled.querySelector('.content span')?.textContent).toContain('GymApp app is running!');
  })
});
