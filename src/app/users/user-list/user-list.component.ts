import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { DataStorageService } from "../../shared/data-storage.service";
import { UsersService } from "../users.service";
import { Router, ActivatedRoute } from "@angular/router";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('user-list', [
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
export class UserListComponent implements OnInit, OnDestroy {

  users: Array<Object>;
  subscription: Subscription;

  constructor(private dataStorageService: DataStorageService, private userService: UsersService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.subscription = this.userService.usersChanged.subscribe(
      (users: Array<Object>) => {
        this.users = users;
      }
    );
    this.users = this.userService.getUsers();
  }

  getTeamName(team: {id: number, name: string, country: string}) {
    if(team === undefined) {
      return 'No team';
    }
    else {
      return team.name;
    }
  }

  onNewPlayer() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
