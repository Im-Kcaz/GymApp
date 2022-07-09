import { Component, NgModule } from '@angular/core';
import { WorkoutScheduleComponent } from './workout-schedule/workout-schedule.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './app.component.scss'
]
})
export class AppComponent {
  title = 'GymApp';
}
