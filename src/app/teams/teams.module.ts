import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TeamsComponent} from "./teams.component";
import {TeamDetailComponent} from "./team-detail/team-detail.component";
import {TeamListComponent} from "./team-list/team-list.component";
import {TeamsRoutingModule} from "./teams-routing.module";
import { TeamEditComponent } from './team-edit/team-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    TeamsComponent,
    TeamDetailComponent,
    TeamListComponent,
    TeamEditComponent
  ],
  imports: [
    /*
     Gives access to common directives(e.g ngclass) In app module there is browser module which is combination
     of common module and things which require during starting of app so it should be in app module only.
     */
    CommonModule,
    TeamsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})

export class TeamsModule {

}
