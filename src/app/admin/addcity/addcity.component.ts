import { Component, OnInit } from '@angular/core';
import { MypackagesService } from '../mypackages.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.scss']
})
export class AddcityComponent implements OnInit {
  cities
  myForm: FormGroup
  fileToUpload
  formData
  cityName
  constructor(private company:MypackagesService,private service : MypackagesService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('')
    });
    this.getCities()
  }
  onFileChange(files: FileList){
    this.fileToUpload = files.item(0)
    this.cityName = this.fileToUpload.name
    this.formData = new FormData();
    this.formData.append('file', this.fileToUpload, this.fileToUpload.name);
   
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
  onSubmit(form :FormGroup){
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
                this.getCities()
                alert(city.name+" is successfully added")
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
