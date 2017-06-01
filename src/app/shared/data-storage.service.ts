import { Injectable, OnInit} from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { TeamsService } from "../teams/teams.service";
import { UsersService } from "../users/users.service";

@Injectable()

export class DataStorageService {

  token = '';
  uid = '';
  client = '';
  token_type = '';
  header;
  options;

  constructor(private http: Http, private teamService: TeamsService, private userService: UsersService) {

  }

  setHeaders()  {
    this.token = window.localStorage['accessToken'];
    this.client = window.localStorage['client'];
    this.token_type = window.localStorage['tokenType'];
    this.uid = window.localStorage['uid'];
    this.header = new Headers({'Content-Type': 'application/json'});
    this.header.append('token', this.token);
    this.header.append('uid', this.uid);
    this.header.append('client', this.client);
    this.header.append('token-type', this.token_type);
    this.options = new RequestOptions({headers: this.header});
    console.log(this.options);
  }

  getTeams() {
    this.setHeaders();
    return this.http.get('http://localhost:3000/api/v1/teams', this.options).map(
      (response: Response) => {
        this.teamService.setTeams(response.json());
        return response.json();
      }
    ).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  addTeam(newTeam: Object) {
    this.setHeaders();
    return this.http.post('http://localhost:3000/api/v1/teams', newTeam, this.options).map(
      (response: Response) => {
        this.getTeams();
        return response.json();
      }
    ).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  updateTeam(id: number, newTeam: Object) {
    this.setHeaders();
    return this.http.put('http://localhost:3000/api/v1/teams/' + id, newTeam, this.options).map(
      (response: Response) => {
        this.getTeams();
        return response.json();
      }
    ).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  deleteTeam(id: number) {
    this.setHeaders();
    return this.http.delete('http://localhost:3000/api/v1/teams/' + id, this.options).map(
      (response: Response) => {
        this.getTeams();
        return response.json();
      }
    ).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  getUsers() {
    this.setHeaders();
    return this.http.get('http://localhost:3000/api/v1/users', this.options).map(
      (response: Response) => {
        this.userService.setUsers(response.json());
        return response.json();
      }
    ).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  addUser(user: Object) {
    this.setHeaders();
    return this.http.post('http://localhost:3000/api/v1/users', user, this.options).map(
      (response: Response) => {
        this.getUsers();
        return response.json();
      }
    ).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  updateUser(id: number, user: Object) {
    this.setHeaders();
    return this.http.put('http://localhost:3000/api/v1/users/' + id, user, this.options).map(
      (response: Response) => {
        this.getUsers();
        return response.json();
      }
    ).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  deleteUser(id: number) {
    this.setHeaders();
    return this.http.delete('http://localhost:3000/api/v1/users/' + id, this.options).map(
      (response: Response) => {
        this.getUsers();
        return response.json();
      }
    ).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

}
