import { Component, OnInit } from '@angular/core';
import { DataStorageService } from "../shared/data-storage.service";
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private tokenAuthService: Angular2TokenService) { }

  ngOnInit() {
    if(this.tokenAuthService.userSignedIn()) {
      this.dataStorageService.getTeams();
    }
  }

}
