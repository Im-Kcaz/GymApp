import { Component, OnInit } from '@angular/core';
import mockExerciseBlocks from '../mocks/block-mock';

@Component({
  selector: 'app-workout-schedule',
  templateUrl: './workout-schedule.component.html',
  styleUrls: ['./workout-schedule.component.scss']
})
export class WorkoutScheduleComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  exerciseBlocks = mockExerciseBlocks;
}
