import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import {TeamsService} from "./teams/teams.service";
import {DataStorageService} from "./shared/data-storage.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'teams',
        loadChildren: './teams/teams.module#TeamsModule' // for lazy loading(load a component module only when its path is entered else not)
      },
      {
        path: 'users',
        component: UsersComponent
      },
      { path: '**', component: HomeComponent }
    ])
  ],
  providers: [TeamsService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
