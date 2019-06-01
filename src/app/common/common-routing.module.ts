import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http'
const routes: Routes = [
  // {path: 'home' , component : ContainerComponent},
  // {path: '', redirectTo : 'home' , pathMatch : 'full'}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
