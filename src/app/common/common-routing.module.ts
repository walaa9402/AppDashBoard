import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path: 'home' , component : ContainerComponent},
  // {path: '', redirectTo : 'home' , pathMatch : 'full'}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
