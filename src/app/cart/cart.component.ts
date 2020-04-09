import { Component, OnInit } from '@angular/core';
import { MensProductService } from '../../assets/mens-product.service'
import { Subscription } from 'rxjs'
import { Model } from '../model';
import { addToCartService } from 'src/assets/addToCart.service';
import { ProtractorExpectedConditions } from 'protractor';
import { ProductServiceService } from '../../assets/product-service.service'
import { AddMensProductToCartService } from 'src/assets/add-mens-product-to-cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dashboardProduct: Model[] = []
  mensProductInCart: Model[] = []
  totalProduct: Model[] = []
  constructor(private cartService: addToCartService,
    private mensProduct: AddMensProductToCartService,
    private homePageProducts: ProductServiceService) { }

  public cartTotal = 0;
  public initialGst=18;
  public gst = 0;
  // public deliveryFee = 0;
  // public deliveryFee1 = 40;
  getItemsForCart(): void {
    this.dashboardProduct = this.cartService.getSelectedItems()
  }

  ngOnInit(): void {
    this.getItemsForCart();
    this.dashboardProduct.forEach(item => {
      this.cartTotal += (item.price)
      // this.deliveryFee1 +=  this.deliveryFee1
      this.gst = this.cartTotal + this.cartTotal * (8 / 100);
      // this.deliveryFee = this.cartTotal+40;
      
    })
    
  }

  removeItemFromCart(id: number): void {
    this.cartService.removeHomePageItems(id);
  }

  sendItemToWishlist(id: number) {
    this.cartService.removeHomePageItems(id);
    alert("item saved");
  }

  placeOrder() {
    this.cartService.getSelectedItems()
    console.log("sent")
    window.location.href = "/checkout";
  }
}
