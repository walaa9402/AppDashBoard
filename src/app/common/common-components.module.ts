import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { AddPackageComponent } from './add-package/add-package.component';
import { BookedPeopleComponent } from './booked-people/booked-people.component';
import { PackageDetailsComponent } from './package-details/package-details.component';

@NgModule({
  imports: [
    CommonRoutingModule,
  ],
  declarations: []
})
export class CommonComponentsModule { }
