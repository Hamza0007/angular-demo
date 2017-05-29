import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        children: [
          { path: 'new', component: UserEditComponent },
          { path: ':id', component: UserDetailComponent },
          { path: ':id/edit', component: UserEditComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule],
})

export class UsersRoutingModule {

}
