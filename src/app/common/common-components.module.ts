import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AvailableCitiesComponent } from './available-cities/available-cities.component';
@NgModule({
  imports: [
    CommonRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, AvailableCitiesComponent]
})
export class CommonComponentsModule { }
