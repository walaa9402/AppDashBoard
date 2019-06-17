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
  packageDetails(pid){
    return this.http.get(this.host+`/company/package/details?id=${pid}`)
  }
  uploadImage(formData){
    return this.http.post(this.host+"/image/",formData)
  }
  deleteImage(name){
    return this.http.post(this.host+"/image/delete",{name})
  }
  login(email,password){
    return this.http.post(this.host+"/company/login",{email,password})
  }
  getCompanies(id){
    return this.http.get(this.host+`/company/all?id=${id}`)
  }
  addCompany(company){
    return this.http.post(this.host+"/company/add",company)
  }
  getCities(){
    return this.http.get(this.host+"/packages/search/all")
  }
  deleteCompany(id){
    return this.http.post(this.host+"/company/delete",{id})
  }
  citiesRequests(){
    return this.http.get(this.host+"/city/requests")
  }
  addCity(city){
    return this.http.post(this.host+"/city/add",city)
  }
  deleteRequest(id){
    return this.http.post(this.host+"/city/request/delete",{id})
  }
  addPackage(pack){
    return this.http.post(this.host+"/packages/add",pack)
  }
  allCities(){
    return this.http.get(this.host+"/company/availcities")
  }
  deleteCity(id){
    return this.http.post(this.host+"/city/delete",{id})
  }
  addRequest(name,id){
    return this.http.post(this.host+"/city/request/add",{name,id})
  }
}
