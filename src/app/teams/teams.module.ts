import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TeamsComponent} from "./teams.component";
import {TeamDetailComponent} from "./team-detail/team-detail.component";
import {TeamListComponent} from "./team-list/team-list.component";
import {TeamsRoutingModule} from "./teams-routing.module";
import {DropDownDirective} from "../shared/dropdown.directive";
import { TeamEditComponent } from './team-edit/team-edit.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TeamsComponent,
    TeamDetailComponent,
    TeamListComponent,
    DropDownDirective,
    TeamEditComponent
  ],
  imports: [
    /*
     Gives access to common directives(e.g ngclass) In app module there is browser module which is combination
     of common module and things which require during starting of app so it should be in app module only.
     */
    CommonModule,
    TeamsRoutingModule,
    ReactiveFormsModule
  ]
})

export class TeamsModule {

}
