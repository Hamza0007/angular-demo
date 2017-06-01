import {Component, OnInit, ViewChild} from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenAuthService: Angular2TokenService, private router: Router) { }

  ngOnInit() {
  }

  onLogOut() {
    window.localStorage.clear();
    this.tokenAuthService.signOut();
    this.router.navigate(['signin']);
  }

}
