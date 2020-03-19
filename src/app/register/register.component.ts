import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

let userInfo = [];
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
    date: new FormControl("", [Validators.required]),
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

  DateValidate() {
    let today = new Date();
    var birthDate = new Date();
    var age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    if (age < 18 && age > 50) {
      return false;
    } else {
      return true;
    }
    console.log("run");
  }

  onSubmit() {
    let key = this.userRegistration.value.email;
    localStorage.setItem(key, JSON.stringify(this.userRegistration.value));
    console.log(localStorage);
  }
}
