import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  company= {}
  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    var expire = new Date().getTime()*1*24*60*60
    localStorage.setItem("LoggedInUser", token)
    localStorage.setItem("expire", JSON.stringify(expire))
  }
  getToken() {
    var date = new Date().getTime()
    var exp = JSON.parse(localStorage.getItem("expire"))
    if(date>=exp){
      localStorage.removeItem("LoggedInUser");
    }
    return localStorage.getItem("LoggedInUser")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(["/"]);
  }
}