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
  public gst = 0;
  public count = 1;
  getItemsForCart(): void {
    this.dashboardProduct = this.cartService.getSelectedItems()
  }

  ngOnInit(): void {
    this.getItemsForCart();
    this.dashboardProduct.forEach(item => {
      this.cartTotal += (item.price)
      this.gst = this.cartTotal + this.cartTotal * (8 / 100);
    })

  }
  addCount(id: number) {
    this.count = this.count + 1;
    this.dashboardProduct.forEach(item => {
      this.cartTotal += (item.price)
      this.gst = this.cartTotal + this.cartTotal * (8 / 100);
    })
  }

  subtractCount(id: number) {
    this.count = this.count - 1;
    this.dashboardProduct.forEach(item => {
      this.cartTotal -= (item.price)
      this.gst = this.cartTotal + this.cartTotal * (8 / 100);
    })
    if (this.count == 0) {
      this.cartService.removeHomePageItems(id)
    }
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
