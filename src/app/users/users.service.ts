import { Subject } from "rxjs";
export class UsersService {

  private users: Array<Object>;
  usersChanged = new Subject<Array<Object>>();

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

}
