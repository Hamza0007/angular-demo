import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TeamsComponent} from "./teams.component";
import {TeamDetailComponent} from "./team-detail/team-detail.component";
import {HomeComponent} from "../home/home.component";
import {TeamEditComponent} from "./team-edit/team-edit.component";

@NgModule({
  imports: [
    RouterModule.forChild([  // Because you are in child module every other module beside root module is child module.
      {
        path: '',
        component: TeamsComponent,
        children: [
          { path: 'new', component: TeamEditComponent },
          { path: ':id', component: TeamDetailComponent },
          { path: ':id/edit', component: TeamEditComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})

export class TeamsRoutingModule {

}
