import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MypackagesService } from '../mypackages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  myForm: FormGroup
  fileToUpload
  formData
  cities = []
  constructor(private service : MypackagesService,private router:Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      location: new FormControl('')
    });
    this.service.getCities().subscribe(res => {
      this.cities=res["data"]
      this.cities=this.cities.map(function(element){
        element=element["city_name"]
        return element
      })
      console.log(this.cities)
    })
  }
  onFileChange(files: FileList){
    this.fileToUpload = files.item(0)
    this.formData = new FormData();
    this.formData.append('file', this.fileToUpload, this.fileToUpload.name);
   
  }
  onSubmit(form :FormGroup){
    // form.value.the name in FormControlName
    if(this.formData){
      this.service.uploadImage(this.formData).subscribe(event => {
        if(event["status"]){
          if(form.value){
            var company={
              name:form.value.name,
              email:form.value.email,
              phone:form.value.phone,
              location:form.value.location,
              password:form.value.password,
              path:event["data"]
            }
            //console.log(company)
            this.service.addCompany(company).subscribe(res =>{
              if(res["status"]){
                alert("company successfully added")
                this.router.navigate(['/admin/companies']);
              }
            })
          }else{
            alert("All fields are required")
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
