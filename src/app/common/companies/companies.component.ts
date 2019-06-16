import { Component, OnInit } from '@angular/core';
import { MypackagesService } from 'src/app/admin/mypackages.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companyId
  role
  companies = []
  constructor(private company:MypackagesService,private auth:AuthService) { }

  ngOnInit() {
    this.companyId=this.auth.company["id"]
    this.role = this.auth.company["role"]
    this.getData()
  }
  getData(){
    this.company.getCompanies(this.companyId).subscribe(res => {
      this.companies=res["data"]
      console.log(this.companies)
      this.companies = this.companies.map(function(element){
        element.path="http://localhost:3000/"+element["c_photo_path"]
        return element
      })
    })
  }
  deleteCompany(id){
    if(confirm("are you sure, you want to delete this company?")){
      this.company.deleteCompany(id).subscribe(res =>{
        if(res["status"]){
          alert("comapny is successfully deleted")
          this.getData()
        }else{
          alert("error in deleting this company, please try again")
          this.getData()
        }
      })
    }
  }
}
