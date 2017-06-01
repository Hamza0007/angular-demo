import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  errorMessage = '';

  constructor(private tokenAuthService: Angular2TokenService, private router: Router) { }

  ngOnInit() {
  }

  onSignInSubmit(){
    this.tokenAuthService.signIn(this.signInUser).subscribe(
      res => {
        if(res.status == 200){
          console.log(res);
          this.router.navigate(['/home']);
        }
      },
      err => {
        this.errorMessage = 'Invalid login credentials. Please try again';
        console.log('err:', err);
      }
    )
  }

}
