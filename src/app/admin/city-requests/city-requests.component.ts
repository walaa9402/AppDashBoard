import { Component, OnInit } from '@angular/core';
import { MypackagesService } from '../mypackages.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-city-requests',
  templateUrl: './city-requests.component.html',
  styleUrls: ['./city-requests.component.scss']
})
export class CityRequestsComponent implements OnInit {
  cities
  requests=[]
  myForm: FormGroup
  fileToUpload
  formData
  constructor(private company:MypackagesService,private service : MypackagesService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('')
    });
    this.getCities()
    this.getCitiesRequests()
  }
  getCities(){
    this.company.getCities().subscribe(res => {
      if(res["status"]){
        this.cities=res["data"]
        this.cities = this.cities.map(function(element){
          element = element["city_name"]
          return element
        })
      }
    })
  }
  getCitiesRequests(){
    this.company.citiesRequests().subscribe(res => {
      //console.log(res["data"])
      if(res["status"]){
        this.requests = res["data"]
      this.requests = this.requests.map(function(element){
        element["name"]=element["name"].charAt(0).toUpperCase() + element["name"].slice(1)
        element.flag=false
        return element
      })
      }
    })
  }
  accept(req){
    req.flag=true
  }
  onFileChange(files: FileList){
    this.fileToUpload = files.item(0)
    this.formData = new FormData();
    this.formData.append('file', this.fileToUpload, this.fileToUpload.name);
   
  }
  reject(req){
    if(confirm("you want to delete this request?")){
      this.service.deleteRequest(req["suggestedCity_id"]).subscribe(res => {
        if(res["status"]){
          this.getCitiesRequests()
        }
      })
    }
  }
  onSubmit(form :FormGroup,req){
    if(this.formData){
      this.service.uploadImage(this.formData).subscribe(event => {
        if(event["status"]){
          if(form.value){
            var city={
              name:form.value.name,
              path:event["data"]
            }
            console.log(city)
            this.service.addCity(city).subscribe(res =>{
              if(res["status"]){
                this.service.deleteRequest(req["suggestedCity_id"]).subscribe(resp => {
                  if(resp["status"]){
                    alert("city is successfully added")
                    this.getCities()
                    this.getCitiesRequests()
                  }
                })
              }
            })
          }else{
            alert("name is required")
          }
        } else {
          alert("error in uploading the image, please try again")
        }
       })
    } else {
      alert("please choose image, image is required")
    }
  }
}
