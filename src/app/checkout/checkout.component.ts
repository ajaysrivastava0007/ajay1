import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../assets/register.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public show: boolean= true;
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

 public userRegistration = this.registerService.userRegistration;

  onSubmit(){
    window.location.href="/orderPlaced"
  }

}
