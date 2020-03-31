import { Component, OnInit } from '@angular/core';
import { MensProductService } from '../../assets/mens-product.service'
import { Subscription } from 'rxjs'
import { Model } from '../model';
import { addToCartService } from 'src/assets/addToCart.service';
import { ProtractorExpectedConditions } from 'protractor';
import { ProductServiceService } from '../../assets/product-service.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dashboardProduct: Model[] = []
  mensProductInCart: Model[] = []
  constructor(private cartService: addToCartService,
    private mensProduct: MensProductService) { }
  getItemsForCart(): void {
    this.dashboardProduct = this.cartService.getSelectedItems()
    // this.getMensForCart()
    this.mensProductInCart = this.cartService.getMensSelectedItems();
  }
  // getMensForCart(){;
  //   this.mensProductInCart = this.cartService.getMensSelectedItems();
  // }
  ngOnInit(): void {
    this.getItemsForCart();

  }
  removeItemFromCart(id: number): void {
    this.cartService.removeHomePageItems(id);
    this.removeMensItem(id);
  }
  removeMensItem(id: number): void {
    this.cartService.removeMensItems(id)
  }

}
