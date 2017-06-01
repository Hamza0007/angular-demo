import { Component, OnInit } from '@angular/core';
import { DataStorageService } from "../shared/data-storage.service";
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private tokenAuthService: Angular2TokenService) { }

  ngOnInit() {
    if(this.tokenAuthService.userSignedIn()) {
      this.dataStorageService.getTeams();
      this.dataStorageService.getUsers();
    }

  }

}
