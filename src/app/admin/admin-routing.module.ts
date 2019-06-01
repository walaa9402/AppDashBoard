import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../common/home/home.component';
import { ContainerComponent } from './container/container.component';
import { PackageDetailsComponent } from '../common/package-details/package-details.component';
import { AddPackageComponent } from '../common/add-package/add-package.component';

const routes: Routes = [
  {path: '' , component : ContainerComponent, children :[
    {path: 'details' , component : PackageDetailsComponent},
    {path: 'addpackage/:id' , component : AddPackageComponent },
    {path: '' , component : HomeComponent}
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
