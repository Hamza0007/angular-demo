import {Subject} from "rxjs";
export class TeamsService {

  private teams: Array<Object>;
  teamsChanged = new Subject<Array<Object>>();

  setTeams(teams: Array<Object>) {
    this.teams = teams;
    this.teamsChanged.next(this.teams);
  }

  getTeams() {
    return this.teams;
  }

  getTeam(id: number) {
    for(let team of this.teams){
      if(id === team['id']) {
        return team;
      }
    }
  }

}
