import { Component, OnInit } from '@angular/core';
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getTeams();
  }

}
