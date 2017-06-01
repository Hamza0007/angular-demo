import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { TeamsService } from "../teams.service";
import { DataStorageService } from "../../shared/data-storage.service";
import { trigger, state, style, transition, animate} from "@angular/animations";

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css'],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *',[ // from not existing to any state (for adding item)
        style({                // initial style when list item is added
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300) // then transition over this duration to its final state which is "in" state
      ]), // void is a reserved state name for cases in which element is not added yet
      transition('* => void',[ //for deleting item
        animate(300, style({
          transform: 'translateX(-100px)',
          opacity: 0
        })) // Here my animate should have the final state
      ]), // void is a reserved state name for cases in which element is not added yet
    ])
  ]
})
export class TeamEditComponent implements OnInit {

  teamForm: FormGroup; // Reactive Approach

  id: number;
  editMode = false;
  editedItemIndex: number;
  editedTeam: Object;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private teamService: TeamsService,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null; // we only have id when we are in edit otherwise it will be null(undefined)
        this.initForm();
      }
    );
  }

  private initForm() {
    let teamName = '', teamCountry = '', teamImage = '';
    let teamPlayers = new FormArray([]);

    if(this.editMode) {
      const team = this.teamService.getTeam(this.id);
      teamName = team['name'];
      teamCountry = team['country'];
      teamImage = team['image'];
      if(team['users']) {
        for(let user of team['users']) {
          teamPlayers.push(
            new FormGroup({
              'id' : new FormControl(user.id),
              'name': new FormControl(user.name, Validators.required),
              'matches': new FormControl(user.matches,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
              'average': new FormControl(user.average, Validators.required)
            })
          );
        }
      }
    }

    const team = this.teamService.getTeam(this.id);
    this.teamForm = new FormGroup({
      'name' : new FormControl(teamName, Validators.required),
      'country' : new FormControl(teamCountry, Validators.required),
      'image' : new FormControl(teamImage, Validators.required),
      'users' : teamPlayers
    });
  }

  onSubmit() {
    const newTeam = {
      'name': this.teamForm.value['name'],
      'country': this.teamForm.value['country'],
      'image': this.teamForm.value['image'],
      'users_attributes': this.teamForm.value['users']
    };

    if(this.editMode) {
      this.dataStorageService.updateTeam(this.id, newTeam);
    }
    else {
      this.dataStorageService.addTeam(newTeam);
    }
    this.router.navigate(['/teams']);
  }

  getTeamFormPlayersControls(form) {
    return form.get('users').controls;
  }

  onAddPlayer() {
    (<FormArray>this.teamForm.get('users')).push(
      new FormGroup({
        'id': new FormControl(null),
        'name': new FormControl(null, Validators.required),
        'matches': new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
        'average': new FormControl(null,[
          Validators.required,
          Validators.pattern(/[0-9]+(\.[0-9][0-9]?)?/),
        ])
      })
    );
  }

  onDeletePlayer(index: number) {
    (<FormArray>this.teamForm.get('users')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
