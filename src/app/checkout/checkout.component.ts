import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../assets/register.service'
import { Model } from '../model';
import { addToCartService } from 'src/assets/addToCart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public show: boolean = true;
  public productsFromCart: Model[] = []
  constructor(private registerService: RegisterService,private cartService: addToCartService) { }



  ngOnInit(): void {
    // for(let i=0;i<this.cartService.totalProducts.length;i++){
    //   this.productsFromCart.push(this.cartService.totalProducts[i])
    // }
    this.productsFromCart = this.cartService.totalProducts;
  }
  public userRegistration = this.registerService.userRegistration;

  onSubmit() {
    window.location.href = "/orderPlaced"
  }

}
