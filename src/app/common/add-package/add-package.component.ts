import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MypackagesService } from 'src/app/admin/mypackages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss'],
  
})
export class AddPackageComponent implements OnInit {
  myForm: FormGroup;
  id : number
  fileToUpload
  paths = []
  formData
  host = "http://localhost:3000/"
  cities
  constructor(private rout : ActivatedRoute, private service : MypackagesService,private router : Router) { }

  ngOnInit() {
    // getting the parameter
    this.rout.paramMap.subscribe(params => {
      this.id = JSON.parse(params.get("id"))
    })
    // get cities
    this.service.getCities().subscribe(res => {
      this.cities=res["data"]
      this.cities=this.cities.map(function(element){
        element=element["city_name"]
        return element
      })
      console.log(this.cities)
    })
    // form generation
    this.myForm = new FormGroup({
      name: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl(''),
      price: new FormControl(''),
      discounted: new FormControl(''),
      duration: new FormControl(''),
      tickets: new FormControl(''),
      date: new FormControl(''),
      desc: new FormControl('')
    });
  } 
  onFileChange(files: FileList){
    this.fileToUpload = files.item(0)
    this.formData = new FormData();
    this.formData.append('file', this.fileToUpload, this.fileToUpload.name);
    this.service.uploadImage(this.formData).subscribe(event => {
      if(event["status"]){
        this.paths.push(event["data"])
        console.log(this.paths)
      }
    })
  }
  deleteImage(path){
    this.service.deleteImage(path).subscribe(event => {
      if(event["status"]){
        var index = this.paths.indexOf(path);
        if (index > -1) {
          this.paths.splice(index, 1);
        }
      }
    })
    
  }
  onSubmit(form :FormGroup){
    // form.value.the name in FormControlName

    var obj = {
      name : form.value.name,
      from : form.value.from,
      to : form.value.to,
      price : form.value.price,
      discounted : form.value.discounted,
      tickets : form.value.tickets,
      duration : form.value.duration,
      date : new Date(form.value.date).getTime(),
      desc : form.value.desc,
      cid : this.id,
      paths: this.paths
    }
    console.log(typeof(obj.price))
    this.service.addPackage(obj).subscribe(res => {
      if(res["status"]){
        alert("package successfully added")
        this.router.navigate(['/admin'])
      }else{
        alert("error adding the package, please try again")
      }
    })
  }

}
