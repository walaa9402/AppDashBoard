import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { AddPackageComponent } from './add-package/add-package.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  imports: [
    CommonRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent]
})
export class CommonComponentsModule { }
