import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../common/home/home.component';
import { ContainerComponent } from './container/container.component';
import { PackageDetailsComponent } from '../common/package-details/package-details.component';
import { AddPackageComponent } from '../common/add-package/add-package.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {path: '' , component : ContainerComponent, children :[
    {path: 'details/:details' , component : PackageDetailsComponent,canActivate:[AuthGuard]},
    {path: 'addpackage/:id' , component : AddPackageComponent,canActivate:[AuthGuard]},
    {path: '' , component : HomeComponent,canActivate:[AuthGuard]}
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
