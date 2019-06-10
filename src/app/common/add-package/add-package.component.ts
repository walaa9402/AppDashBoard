import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MypackagesService } from 'src/app/admin/mypackages.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.scss'],
  
})
export class AddPackageComponent implements OnInit {
  myForm: FormGroup;
  id : number
  myFiles:File
  path
  constructor(private rout : ActivatedRoute, private service : MypackagesService) { }

  ngOnInit() {
    // getting the parameter
    this.rout.paramMap.subscribe(params => {
      this.id = JSON.parse(params.get("id"))
    })
    // form generation
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
      myFile: new FormControl('')
    });
  }
  onFileChange(event){
    this.myFiles=event.target.files[0]
    // this.path=event.target.value
    // this.myForm.patchValue({
    //   file: event.target.files
    //   // formControlName2: myValue2 (can be omitted)
    // });
  }
  onSubmit(form :FormGroup){
    // form.value.the name in FormControlName
    // this.service.uploadImage(form).subscribe(event => {
    //   console.log(event)
    // })
    console.log(this.myFiles)
  }

}
