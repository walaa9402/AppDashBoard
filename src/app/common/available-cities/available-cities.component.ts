import { Component, OnInit } from '@angular/core';
import { MypackagesService } from 'src/app/admin/mypackages.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-available-cities',
  templateUrl: './available-cities.component.html',
  styleUrls: ['./available-cities.component.scss']
})
export class AvailableCitiesComponent implements OnInit {
  cities
  host = "http://localhost:3000/"
  role
  constructor(private service : MypackagesService,private auth:AuthService) { }

  ngOnInit() {
    this.role = this.auth.company["role"]
    this.getAllCities()
  }
  getAllCities(){
    this.service.allCities().subscribe(res => {
      if(res["status"]){
        this.cities = res["data"]
        this.cities = this.cities.map(function(element){
          element["city_name"]=element["city_name"].charAt(0).toUpperCase() + element["city_name"].slice(1)
          return element
        })
      }
    })
  }
  delete(city){
    if(confirm("Are you sure, you want to delete "+city.city_name+"?")){
      this.service.deleteCity(city.city_id).subscribe(res => {
        if(res["status"]){
          this.getAllCities()
          alert(city.city_name+" is successfully deleted")
        } else {
          alert("error in deleting "+city.city_name+", please try again")
        }
      })
    }
  }
}
