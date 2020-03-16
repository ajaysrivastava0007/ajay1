import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';


let userInfo=[];
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
 

  
  public currentDate = new Date();

  constructor() { }
  
  ngOnInit(): void {}

  userRegistration = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.minLength(4), Validators.pattern("^[a-zA-Z]{4,10}")]),
    lastName : new FormControl('',[Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]{4,10}")]),
    date : new FormControl(),
    email: new FormControl('',[Validators.required, Validators.email, Validators.pattern(
      '^[a-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('',[Validators.minLength(4), Validators.required, Validators.pattern(
        "^[a-zA-Z0-9!@#\,.<>?$%\^&]{4,15}$")])
  })
 
  // dateValidate()
  // { 
    
  //   if(( +this.currentDate.getUTCFullYear - this.userRegistration.value.date.getUTCFullYear > 18) )
  //   {
  //     console.log(this.currentDate.valueOf() - this.userRegistration.value.date.valueOf() > 18)
  //   }
  // }
  onSubmit()
  {
    let key  = this.userRegistration.value.email;
    localStorage.setItem(key,JSON.stringify(this.userRegistration.value))
    console.log(localStorage)
}
}
