import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamsService } from "../teams.service";
import { DataStorageService } from "../../shared/data-storage.service";
import { Subscription } from "rxjs";
import 'rxjs/Rx';
import { ActivatedRoute, Router } from "@angular/router";
import { trigger, state, style, transition, animate } from "@angular/animations";
import { UsersService } from "../../users/users.service";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
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
export class TeamListComponent implements OnInit, OnDestroy {

  teams: Array<Object>;
  subscription: Subscription;
  filteredTeam = '';

  constructor(private dataStorageService: DataStorageService, private teamsService: TeamsService,
              private router: Router, private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {

    this.subscription = this.teamsService.teamsChanged.subscribe(
      (teams: Array<Object>) => {
        this.teams = teams;
      }
    );
    this.teams = this.teamsService.getTeams();
  }

  onNewTeam() {
    this.router.navigate(['/team/new']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  OnTeamClick(id: number) {
    this.router.navigate(["/team/" + id]);
  }



}
