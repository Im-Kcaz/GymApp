import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutScheduleComponent } from './workout-schedule/workout-schedule.component';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutWeekComponent } from './workout-week/workout-week.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    WorkoutScheduleComponent,
    WorkoutComponent,
    WorkoutWeekComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
