import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from '../common/home/home.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPackageComponent } from '../common/add-package/add-package.component';
import { PackageDetailsComponent } from '../common/package-details/package-details.component';
import { ProfileComponent } from '../common/profile/profile.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompaniesComponent } from '../common/companies/companies.component';
import { CityRequestsComponent } from './city-requests/city-requests.component';
import { MaterialModule } from '../material/material.module';
import { AddcityComponent } from './addcity/addcity.component';
import { AvailableCitiesComponent } from '../common/available-cities/available-cities.component';

// import { MaterialModule } from './material.module';
@NgModule({
  declarations : [DashboardComponent, HomeComponent, ContainerComponent, HeaderComponent, AddPackageComponent, PackageDetailsComponent,ProfileComponent, AddCompanyComponent,CompaniesComponent, CityRequestsComponent, AddcityComponent, AvailableCitiesComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    // MaterialModule
  ]
})
export class AdminModule { }
