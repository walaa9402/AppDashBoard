import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../common/home/home.component';
import { ContainerComponent } from './container/container.component';
import { PackageDetailsComponent } from '../common/package-details/package-details.component';
import { AddPackageComponent } from '../common/add-package/add-package.component';
import { AuthGuard } from '../auth.guard';
import { ProfileComponent } from '../common/profile/profile.component';
import { CompaniesComponent } from '../common/companies/companies.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CityRequestsComponent } from './city-requests/city-requests.component';
import { AddcityComponent } from './addcity/addcity.component';
import { AvailableCitiesComponent } from '../common/available-cities/available-cities.component';

const routes: Routes = [
  {path: '' , component : ContainerComponent, children :[
    {path: 'details/:details' , component : PackageDetailsComponent,canActivate:[AuthGuard]},
    {path: 'addpackage/:id' , component : AddPackageComponent,canActivate:[AuthGuard]},
    {path: '' , component : HomeComponent,canActivate:[AuthGuard]},
    {path: 'myprofile' , component : ProfileComponent,canActivate:[AuthGuard]},
    {path: 'companies' , component : CompaniesComponent,canActivate:[AuthGuard]},
    {path: 'addcompany' , component : AddCompanyComponent,canActivate:[AuthGuard]},
    {path: 'cityrequest' , component : CityRequestsComponent,canActivate:[AuthGuard]},
    {path: 'addcity' , component : AddcityComponent,canActivate:[AuthGuard]},
    {path: 'availablecities' , component : AvailableCitiesComponent,canActivate:[AuthGuard]}
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
