import { Component, OnInit } from '@angular/core';
import mockExerciseBlocks from '../mocks/block-mock';
import {CdkDragDrop, moveItemInArray, CdkDrag} from '@angular/cdk/drag-drop';
import IExercise from '../entities/Exercise';
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

  drop(event: CdkDragDrop<IExercise[]>) {
    moveItemInArray(this.exerciseBlocks.map(e => e.weeks), event.previousIndex, event.currentIndex);
  }
}
