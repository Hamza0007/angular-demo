import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { TeamsService } from "../teams/teams.service";
import {UsersService} from "../users/users.service";

@Injectable()

export class DataStorageService {

  constructor(private http: Http, private teamService: TeamsService, private userService: UsersService) {}

  getTeams() {
    return this.http.get('http://localhost:3000/api/v1/teams').map(
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
    return this.http.post('http://localhost:3000/api/v1/teams', newTeam).map(
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
    return this.http.put('http://localhost:3000/api/v1/teams/' + id, newTeam).map(
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
    return this.http.delete('http://localhost:3000/api/v1/teams/' + id).map(
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
    return this.http.get('http://localhost:3000/api/v1/users').map(
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
    return this.http.post('http://localhost:3000/api/v1/users', user).map(
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
    return this.http.put('http://localhost:3000/api/v1/users/' + id, user).map(
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
    return this.http.delete('http://localhost:3000/api/v1/users/' + id).map(
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
