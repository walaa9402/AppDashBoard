import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MypackagesService } from '../admin/mypackages.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup
  // data
  constructor(private company : MypackagesService,public auth : AuthService,private myRoute: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit(form :FormGroup){
    // form.value.the name in FormControlName
    this.company.login(form.value.email,form.value.password).subscribe(res => {
      if(res["company"]){
        console.log(res)
        this.auth.company=res["company"]
        this.auth.sendToken(res["token"])
        console.log(res["token"])
        if(res["company"]["role"]== "admin"){
          this.myRoute.navigate(["/admin"])
        } else {
          this.myRoute.navigate(["/company"])
        }
      }
    })
  }
}
