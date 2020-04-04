import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  userRegistration = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern("^[a-zA-Z]{4,10}")
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern("^[a-zA-Z]{4,10}")
    ]),
    date: new FormControl("", [Validators.required,]),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.pattern("^[a-z0-9._]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl("", [
      Validators.minLength(4),
      Validators.required,
      Validators.pattern(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
      )
    ])
  });

}
