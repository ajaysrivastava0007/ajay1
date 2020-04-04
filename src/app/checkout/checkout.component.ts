import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public show: boolean= true;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    window.location.href="/orderPlaced"
  }

}
