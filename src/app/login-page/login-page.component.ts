import { Component, OnInit } from "@angular/core";

import { LoginService } from '../../assets/login.service'

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent {
  constructor(private login: LoginService) {}
 
  public userProfile = this.login.userProfile;

  onLogin()
  {
    this.login.onSubmit()
  }
}
