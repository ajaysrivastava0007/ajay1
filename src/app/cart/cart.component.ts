import { Component, OnInit } from '@angular/core';
import { MensProductService } from '../../assets/mens-product.service'
import { Subscription } from 'rxjs'
import { Model } from '../model';
import { addToCartService } from 'src/assets/addToCart.service';
import { ProtractorExpectedConditions } from 'protractor';
import { ProductServiceService } from '../../assets/product-service.service'
import { AddMensProductToCartService } from 'src/assets/add-mens-product-to-cart.service';
import value from '*.json';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dashboardProduct: Model[] = []
  mensProductInCart: Model[] = []
  public zero: number = 0;
  constructor(private cartService: addToCartService,
    private mensProduct: AddMensProductToCartService,
    private homePageProducts: ProductServiceService) { }

    public cartTotal = 0;
    

  getItemsForCart(): void {
    this.dashboardProduct = this.cartService.getSelectedItems()
    }
    
  getMensItemsForCart(){
    this.mensProductInCart = this.mensProduct.getMensSelectedItems();
    for(let i =0;i<this.mensProductInCart.length;i++){
      this.dashboardProduct.push()    }
  }

  ngOnInit(): void {
    this.getItemsForCart();
    this.getMensItemsForCart();

    this.dashboardProduct.forEach(item =>{
      this.cartTotal += (item.price)
    })
  
  }
  removeItemFromCart(id: number): void {
    this.cartService.removeHomePageItems(id);
    this.removeMensItem(id);
  }
  removeMensItem(id: number): void {
    this.mensProduct.removeMensItems(id)
  }
 
}
