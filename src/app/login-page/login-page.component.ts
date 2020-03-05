import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
  constructor(){}

  userProfile = new FormGroup ({
  email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
    '^[a-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  password: new FormControl('',[Validators.minLength(4), Validators.required, Validators.pattern(
    "^[a-zA-Z0-9!@#\,.<>?$%\^&]{4,15}$")])
});
  
ngOnInit(){}

onSubmit()
{
  if(this.userProfile.valid)
  {
    console.log(this.userProfile.value);
  }
  else
  {

  }
  
}

  }

