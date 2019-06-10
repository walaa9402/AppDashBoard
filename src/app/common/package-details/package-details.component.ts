import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {
  details : {trip : {} , people : []}
  package = {}
  booked = []
  constructor(private rout : ActivatedRoute) { }

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

}
