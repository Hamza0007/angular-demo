import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { TeamsService } from "../teams/teams.service";

@Injectable()

export class DataStorageService {

  constructor(private http: Http, private teamService: TeamsService) {}

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

}
