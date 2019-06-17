import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContainerComponent } from './container/container.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPackageComponent } from '../common/add-package/add-package.component';
import { PackageDetailsComponent } from '../common/package-details/package-details.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompaniesComponent } from '../common/companies/companies.component';
import { CityRequestsComponent } from './city-requests/city-requests.component';
import { MaterialModule } from '../material/material.module';
import { AddcityComponent } from './addcity/addcity.component';
import { CommonComponentsModule } from '../common/common-components.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations : [DashboardComponent, ContainerComponent, AddPackageComponent, PackageDetailsComponent,AddCompanyComponent,CompaniesComponent, CityRequestsComponent, AddcityComponent, HeaderComponent],
  imports: [
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonComponentsModule,
    CommonModule
  ],
  exports: []
})
export class AdminModule { }
