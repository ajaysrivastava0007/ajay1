import { Component, OnInit } from '@angular/core';
import { MensProductService } from '../../assets/mens-product.service'
import { Subscription } from 'rxjs'
import { Model } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  mensProduct: Model[] = []
  // product: any;
  subscription: Subscription
  constructor(private mensProductService: MensProductService) {
    this.subscription = this.mensProductService.getMessage().subscribe((product) => {
      // for (let i = 0; i < this.mensProductService.mensProductList.length; i++) {
      this.mensProduct.push(product)
      console.log(product)

      // }
    })
  }

  ngOnInit(): void {

  }

}
