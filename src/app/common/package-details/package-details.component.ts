import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MypackagesService } from 'src/app/admin/mypackages.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {
  details : {trip : {} , people : []}
  package = {}
  booked = []
  constructor(private rout : ActivatedRoute, private myRoute: Router,private company:MypackagesService) { }

  ngOnInit() {
    this.rout.paramMap.subscribe(params => {
      this.details = JSON.parse(params.get("details"))
      this.package = this.details.trip
      this.booked = this.details.people
      console.log(this.package,this.booked)
      this.booked = this.booked.map(function(element){
        element["booking_date"]=new Date(element["booking_date"]).toDateString()
        return element
      })
    })
  }
  delete(p){
    if(confirm("Are You Sure, You Want to Delete Package ?")){
      if(p.avail == p.avail_tickets){
        this.company.deletePackage(p.pid).subscribe(res => {
          this.myRoute.navigate(["/admin"]);
          console.log(typeof(res["data"]))
        })
      } else {
        alert("you can not delete this package")
      }
    } 
  }
}
