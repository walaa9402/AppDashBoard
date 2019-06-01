import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from '../common/home/home.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { AddPackageComponent } from '../common/add-package/add-package.component';
import { BookedPeopleComponent } from '../common/booked-people/booked-people.component';
import { PackageDetailsComponent } from '../common/package-details/package-details.component';

@NgModule({
  declarations : [DashboardComponent, HomeComponent, ContainerComponent, HeaderComponent, AddPackageComponent, BookedPeopleComponent, PackageDetailsComponent],
  imports: [
    AdminRoutingModule,
    CommonModule
  ]
})
export class AdminModule { }
