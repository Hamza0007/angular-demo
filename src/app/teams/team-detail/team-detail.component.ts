import { Component, OnInit } from '@angular/core';
import { TeamsService } from "../teams.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DataStorageService } from "../../shared/data-storage.service";
import {UsersService} from "../../users/users.service";

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: any;
  id: number;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute,
              private router: Router, private dataStorageService: DataStorageService,
              public userService: UsersService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.team = this.teamsService.getTeam(this.id);
      }
    );
  }

  onEditTeam() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteTeam() {
    this.dataStorageService.deleteTeam(this.id);
    this.router.navigate(['/teams']);
  }

}
