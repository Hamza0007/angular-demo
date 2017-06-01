import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Angular2TokenService} from "angular2-token";

@Injectable()

export class AuthGuard implements CanActivate{

  constructor(private tokenAuthService: Angular2TokenService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.tokenAuthService.userSignedIn();
  }
}
