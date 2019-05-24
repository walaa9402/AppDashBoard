import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../common/home/home.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {path: '' , component : ContainerComponent, children :[
    {path: '' , component : HomeComponent , outlet: 'admin'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
