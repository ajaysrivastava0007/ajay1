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
  dashboardProduct: number[] = []
  // product: any;
  subscription: Subscription
  constructor(private dashBoardSerive: addToCartService,
    private productService: ProductServiceService) {
    this.subscription = this.dashBoardSerive.getItem().subscribe(() => {
 for(let i=0;i<this.productService.cartProducts.length;i++) {
      this.dashboardProduct.push(i)
      console.log(i)

       }
    })
  }

  ngOnInit(): void {

  }

}
