import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './../my-bar-chart/my-bar-chart.component';
import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AvailableCitiesComponent } from './available-cities/available-cities.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    ChartsModule   ],
  declarations: [ProfileComponent,HomeComponent, AvailableCitiesComponent, StatisticsComponent,
    MyBarChartComponent],
    exports:[]
})
export class CommonComponentsModule { }
