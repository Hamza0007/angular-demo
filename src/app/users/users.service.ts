import { Subject } from "rxjs";
import {Injectable} from "@angular/core";
import {Angular2TokenService} from "angular2-token";

@Injectable()

export class UsersService {

  private users: Array<Object>;
  usersChanged = new Subject<Array<Object>>();

  constructor(private tokenAuthService: Angular2TokenService) { }

  setUsers(users: Array<Object>) {
    this.users = users;
    this.usersChanged.next(this.users);
  }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    for(let user of this.users){
      if(id === user['id']) {
        return user;
      }
    }
  }

  isAdmin() {
    return this.tokenAuthService.currentUserData["role"] === 'admin';
  }

}
