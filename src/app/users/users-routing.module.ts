import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {AuthGuard} from "../auth-guard.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent
      }
    ])
  ],
  exports: [RouterModule],
})

export class UsersRoutingModule {

}
