import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  company
  image
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.company=this.auth.company["name"]
    this.company=this.company.charAt(0).toUpperCase() + this.company.slice(1)
    this.image = "https://wetravelapp.herokuapp.com/"+this.auth.company["photo_path"]
  }

}