import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TeamsComponent} from "./teams.component";
import {TeamListComponent} from "./team-list/team-list.component";
import {TeamsRoutingModule} from "./teams-routing.module";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    TeamsComponent,
    TeamListComponent,
  ],
  imports: [
    /*
     Gives access to common directives(e.g ngclass) In app module there is browser module which is combination
     of common module and things which require during starting of app so it should be in app module only.
     */
    CommonModule,
    TeamsRoutingModule,
    FormsModule,
    SharedModule
  ]
})

export class TeamsModule {

}
