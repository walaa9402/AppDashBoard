import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MypackagesService {
  host ="http://localhost:3000"
  constructor(private http : HttpClient) { }
  mypackages(company_id){
    return this.http.get(this.host+`/company/mypackages?id=${company_id}`)
  }
  deletePackage(package_id){
    return this.http.get(this.host+`/company/package/remove?id=${package_id}`)
  }
}
