import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../assets/product-service.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  product: any[]=[];
  constructor(private cartProduct: ProductServiceService) {
    this.getProductFromUser()
   }

  ngOnInit(): void {
  }

  getProductFromUser()
  {
    for(let i=0;i<this.cartProduct.cartProducts.length;i++)
    {
      this.product.push(this.cartProduct.cartProducts)
    }
  }
}
