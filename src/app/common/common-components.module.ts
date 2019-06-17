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
    CommonModule
  ],
  declarations: [ProfileComponent,HomeComponent, AvailableCitiesComponent, StatisticsComponent]
})
export class CommonComponentsModule { }
