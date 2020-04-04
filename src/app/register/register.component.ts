  import { Component, OnInit } from "@angular/core";
  import { RegisterService } from '../../assets/register.service'

let userInfo = [];
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  
  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}

  public userRegistration = this.registerService.userRegistration;

 
  DateValidate() {
    let today = new Date();
    var birthDate = new Date();
    var age = today.getUTCFullYear() - birthDate.getUTCFullYear();
    if (age < 18 && age > 50) {
      return false;
    } else {
      return true;
    }
   
  }

  onSubmit() {
    let key = this.userRegistration.value.email;
    localStorage.setItem(key, JSON.stringify(this.userRegistration.value));
    console.log(localStorage);
  }
}
