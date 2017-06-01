import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {DataStorageService} from "../../shared/data-storage.service";
import {TeamsService} from "../../teams/teams.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: Object;
  id: number;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.userService.getUser(this.id);
      }
    );
  }

  onEditPlayer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeletePlayer() {
    this.dataStorageService.deleteUser(this.id);
    this.router.navigate(['/users']);
  }

}
