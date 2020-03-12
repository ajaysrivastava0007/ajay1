import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
// import { RegisterComponent } from '../register/register.component';
import { DatabaseService } from '../database.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  
   Info =[]; 
   constructor( public send : DatabaseService ) { }

  userProfile = new FormGroup ({
  email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
    '^[a-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  password: new FormControl('',[Validators.minLength(4), Validators.required, Validators.pattern(
    "^[a-zA-Z0-9!@#\,.<>?$%\^&]{4,15}$")])
});
  
ngOnInit(){
 
}

onSubmit()
{
  console.log(this.send.signIn("key"))
  // email:this.userProfile.value.email;
  // password: this.userProfile.value.pass;
  // this.send.signUp(this.userProfile.value.email, this.userProfile.value.password);
  // console.log()
}

}