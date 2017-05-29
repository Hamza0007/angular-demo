import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { UsersService } from "../users.service";
import { DataStorageService } from "../../shared/data-storage.service";
import { TeamsService } from "../../teams/teams.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup; // Reactive Approach

  id: number;
  editMode = false;
  teamPresent: boolean;
  teams: Array<Object>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UsersService,
              private dataStorageService: DataStorageService,
              private teamService: TeamsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null; // we only have id when we are in edit otherwise it will be null(undefined)
        this.initForm();
      }
    );
    this.setTeamBoolean(this.userService.getUser(this.id));
    this.teams = this.teamService.getTeams();
  }

  private initForm()
  {
    let userName = '', userAge = '', userMatches = '', userAverage = '';

    if(this.editMode) {
      const user = this.userService.getUser(this.id);
      userName = user['name'];
      userAge = user['age'];
      userMatches = user['matches'];
      userAverage = user['average'];
    }

    this.userForm = new FormGroup({
      'name' : new FormControl(userName, Validators.required),
      'age' : new FormControl(userAge, Validators.required),
      'matches': new FormControl(userMatches,[
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
      'average': new FormControl(userAverage, Validators.required),
      'team_id': new FormControl(''),
    });
  }

  onSubmit() {
    const newUser = {
      'name': this.userForm.value['name'],
      'age': this.userForm.value['age'],
      'matches': this.userForm.value['matches'],
      'average': this.userForm.value['average'],
      'team_id': this.userForm.value['team_id'] || ''
    };

    if(this.editMode) {
      this.dataStorageService.updateUser(this.id, newUser);
    }
    else {
      this.dataStorageService.addUser(newUser);
    }
    this.router.navigate(['/users']);
  }

  setTeamBoolean(user) {
    if(user === undefined) {
      this.teamPresent = false;
    }
    else if (user.team === undefined) {
      this.teamPresent = false;
    }
    else {
      this.teamPresent = true;
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
