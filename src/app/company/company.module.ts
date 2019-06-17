import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContainerComponent } from './container/container.component';
import { PackageDetailsComponent } from '../common/package-details/package-details.component';
import { AddPackageComponent } from '../common/add-package/add-package.component';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from '../common/home/home.component';
import { ProfileComponent } from '../common/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from '../common/companies/companies.component';
import { AvailableCitiesComponent } from '../common/available-cities/available-cities.component';
import { StatisticsComponent } from '../common/statistics/statistics.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CommonComponentsModule } from '../common/common-components.module';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: '' , component : ContainerComponent, children :[
    {path: 'details/:details' , component : PackageDetailsComponent,canActivate:[AuthGuard]},
    {path: 'addpackage/:id' , component : AddPackageComponent,canActivate:[AuthGuard]},
    {path: '' , component : HomeComponent,canActivate:[AuthGuard]},
    {path: 'myprofile' , component : ProfileComponent,canActivate:[AuthGuard]},
    {path: 'companies' , component : CompaniesComponent,canActivate:[AuthGuard]},
    {path: 'availablecities' , component : AvailableCitiesComponent,canActivate:[AuthGuard]},
    {path: 'statistics' , component : StatisticsComponent,canActivate:[AuthGuard]}
  ] },
  
];
@NgModule({
  declarations: [DashboardComponent, ContainerComponent, AddPackageComponent, PackageDetailsComponent,CompaniesComponent, HeaderComponent],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    CommonComponentsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class CompanyModule { }
