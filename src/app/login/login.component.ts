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
  emailFlag = false
  passwordFlag = false
  // data
  constructor(private company : MypackagesService,public auth : AuthService,private myRoute: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit(form :FormGroup){
    this.emailFlag = false
    this.passwordFlag = false
    // form.value.the name in FormControlName
    this.company.login(form.value.email,form.value.password).subscribe(res => {
      if(res["status"] && res["token"]){
        //  all data is right
        console.log(res)
        this.auth.company=res["company"]
        this.auth.sendToken(res["token"])
        console.log(res["token"])
        this.myRoute.navigate([`/${res["company"]["role"]}`])
      } else if(res["status"] && !res["token"]){
        // email is wrong
        this.emailFlag = true
      } else {
        // password is wrong
        this.passwordFlag = true
      }
    })
  }
}
