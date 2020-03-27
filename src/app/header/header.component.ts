import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/assets/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public login: LoginService) { }

  ngOnInit(): void {
  }

  loginButton() {

    window.location.href = "/login"
    this.login.setLoginStatus(1)

  }

  logoutButton() {
    this.login.setLoginStatus(0);

  }
}
