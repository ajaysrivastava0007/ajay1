import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userRegistration = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastName : new FormControl('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl('',[Validators.required, Validators.email, Validators.pattern(
      '^[a-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('',[Validators.minLength(4), Validators.required, Validators.pattern(
        "^[a-zA-Z0-9!@#\,.<>?$%\^&]{4,15}$")])
  })

}
