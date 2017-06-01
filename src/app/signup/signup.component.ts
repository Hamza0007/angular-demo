import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  constructor(private tokenAuthService: Angular2TokenService, private router: Router) { }

  ngOnInit() {}


  onSignUpSubmit(){
    this.tokenAuthService.registerAccount(this.signUpUser).subscribe(
      (res) => {
        if (res.status == 200){
          this.router.navigate(['/signin']);
        }
      },
      (err) => {
        console.log(err.json())
      }
    )
  }

}
