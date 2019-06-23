import { Component, OnInit } from '@angular/core';
import { MypackagesService } from 'src/app/admin/mypackages.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companyId
  myPackages=[]
  packagedetails = {trip : {} , people : []} 
  role
  constructor(private company : MypackagesService, private router : Router,private auth:AuthService) { }

  ngOnInit() {
    this.role = this.auth.company["role"]
    this.companyId = this.auth.company["id"]
    this.getPackages()
  }
  getPackages(){
    this.company.mypackages(this.companyId).subscribe(res => {
      if(res["data"].length>0){
        this.myPackages = res["data"]
        this.myPackages = this.myPackages.map(function(element){
          element["paths"]=element["paths"].map(function(elem){

            return "https://wetravelapp.herokuapp.com/"+elem
          })
          element["date"]=new Date(element["date"])
          element["addingDate"]=new Date(element["addingDate"])
          element["date"]=element["date"].toDateString()
          element["addingDate"]=element["addingDate"].toDateString()
          element.avail=element["avail_tickets"]-(element["adults"]+element["children"])
          element["travel_to"]=element["travel_to"].charAt(0).toUpperCase() + element["travel_to"].slice(1)
          element["travel_from"]=element["travel_from"].charAt(0).toUpperCase() + element["travel_from"].slice(1)
          return element
        })
      }
      console.log(this.myPackages[0])
    })
  }
  add(){
    this.router.navigate([`/${this.role}/addpackage`, this.companyId]);
  }
  delete(p){
    if(confirm("Are You Sure, You Want to Delete Package ?")){
      if(p.avail == p.avail_tickets){
        this.company.deletePackage(p.pid).subscribe(res => {
          this.getPackages()
          console.log(typeof(res["data"]))
        })
      } else {
        alert("you can not delete this package")
      }
    } 
  }
  details(pack){
    this.company.packageDetails(pack.pid).subscribe(res => { 
      this.packagedetails.trip = pack
      this.packagedetails.people = res["data"]
      this.router.navigate([`/${this.role}/details`, JSON.stringify(this.packagedetails)]);
    })
  }
}
