import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { TeamsService } from "./teams/teams.service";
import { DataStorageService } from "./shared/data-storage.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsersService } from "./users/users.service";
import { Angular2TokenService } from "angular2-token";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from "./auth-guard.service";
import { TeamShowComponent } from "./teams/team-show/team-show.component";
import { TeamEditComponent } from "./teams/team-edit/team-edit.component";
import { TeamDetailComponent } from "./teams/team-detail/team-detail.component";
import { SharedModule } from "./shared/shared.module";
import { UserShowComponent } from "./users/user-show/user-show.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    TeamShowComponent,
    TeamDetailComponent,
    TeamEditComponent,
    UserDetailComponent,
    UserEditComponent,
    UserShowComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'teams',
        loadChildren: './teams/teams.module#TeamsModule', // for lazy loading(load a component module only when its path is entered else not)
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule', // for lazy loading(load a component module only when its path is entered else not)
        canActivate: [AuthGuard]
      },
      {
        path: 'team',
        component: TeamShowComponent,
        children: [
          { path: 'new', component: TeamEditComponent, canActivate: [AuthGuard] },
          { path: ':id', component: TeamDetailComponent },
          { path: ':id/edit', component: TeamEditComponent, canActivate: [AuthGuard] }
        ]
      },
      {
        path: 'user',
        component: UserShowComponent,
        children: [
          { path: 'new', component: UserEditComponent, canActivate: [AuthGuard] },
          { path: ':id', component: UserDetailComponent },
          { path: ':id/edit', component: UserEditComponent, canActivate: [AuthGuard] }
        ]
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: '**',
        component: HomeComponent
      }
    ])
  ],
  providers: [TeamsService, DataStorageService, UsersService, Angular2TokenService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
