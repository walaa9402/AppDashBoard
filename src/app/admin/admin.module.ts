import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from '../common/home/home.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations : [DashboardComponent, HomeComponent, ContainerComponent],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
