import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TeamsComponent} from "./teams.component";
import {TeamDetailComponent} from "./team-detail/team-detail.component";
import {TeamEditComponent} from "./team-edit/team-edit.component";
import {AuthGuard} from "../auth-guard.service";
import {TeamShowComponent} from "./team-show/team-show.component";

@NgModule({
  imports: [
    RouterModule.forChild([  // Because you are in child module every other module beside root module is child module.
      {
        path: '',
        component: TeamsComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class TeamsRoutingModule {

}
