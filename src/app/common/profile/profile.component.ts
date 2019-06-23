import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  company
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.company = this.auth.company
    this.company.image="https://wetravelapp.herokuapp.com/"+this.company["photo_path"]
    this.company["name"]=this.company["name"].charAt(0).toUpperCase() + this.company["name"].slice(1)
    this.company["location"]=this.company["location"].charAt(0).toUpperCase() + this.company["location"].slice(1)
  }

}
