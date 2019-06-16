import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //  login check
      var admin = []
      var company = []
      var url = state.url.split("/")
      console.log(url[1])
      // this.myRoute.navigate(["/"]);
      // return true
      if(this.auth.isLoggedIn()){
        //  admin
        if(this.auth.company["role"]=="admin" && url[1]== "admin"){
          return true
        } else
        // company
        if(this.auth.company["role"]== "company" && url[1]=="company"){
          return true
        } else {
          // this.myRoute.navigate(["/"]);
          return true
        }
      } else {
        this.myRoute.navigate(["/"]);
        console.log("not logged in")
        return false;
      }
    // if(this.auth.isLoggedIn() && this.auth.company["role"]=="admin" && state.url=="" ){
    //   return true;
    // } else if(this.auth.isLoggedIn() && this.auth.company["role"]=="company" && state.url=="" ){
    //   return true;
    // }else{
    //   this.myRoute.navigate(["/"]);
    //   return false;
    // }
  }
}