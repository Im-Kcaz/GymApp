import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import IExercise from '../entities/Exercise';
import IExerciseDay from '../entities/ExerciseDay';
import IWarmup from '../entities/Warmup';
import { WorkoutScheduleComponent } from '../workout-schedule/workout-schedule.component';
import { WorkoutService } from './workout.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import EXERCISE from '../enums/EXERCISE';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  @Input() workout: IExerciseDay = {
    exercises: [],
    date: new Date(Date.now())
  };

  constructor(private service: WorkoutService) {
  }

  getExercises() {
    console.log("hi");
    this.service.getExercises().subscribe(resp => this.workout.exercises = resp);
  }

  createExercise() {
    const exercise: IExercise = {
      name: "SQUAT",
      sets: 1,
      reps: 2,
      actualWeight: 10,
      targetReps: 1,
      actualReps: 2,
      targetRPE: 2,
      exercise: EXERCISE.SQUAT,
      weight: 0,
      warmups: []
    };
    this.service.createExercise(exercise).subscribe();
  }

  ngOnInit(): void {
    console.log("init");
  }

  drop(event: CdkDragDrop<IExercise>) {
    moveItemInArray(this.workout.exercises, event.previousIndex, event.currentIndex);
  }

  formatDate(): string {
    return this.workout.date.toDateString();
  }

  displayWarmups(warmups: IWarmup[]): string {
    if (!warmups) {
      return "N/A";
    }

    let display = "";
    
    warmups.forEach(w => {
      display += `${w.weight} -> ${w.reps} x ${w.sets}`;
      if (warmups.indexOf(w) !== warmups.length - 1) {
        display += ', '
      }
    });
    return display;
  }

  
}
