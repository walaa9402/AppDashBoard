import { Component, OnInit } from '@angular/core';
import { MypackagesService } from 'src/app/admin/mypackages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companyId=1
  myPackages=[]
  constructor(private company : MypackagesService, private router : Router) { }

  ngOnInit() {
    this.company.mypackages(this.companyId).subscribe(res => {
      if(res["data"]){
        this.myPackages = res["data"]
        this.myPackages = this.myPackages.map(function(element){
          element["paths"][0]="http://localhost:3000/"+element["paths"][0]
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
}
