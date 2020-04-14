import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { addToCartService } from 'src/assets/addToCart.service';

@Component({
  selector: 'app-womens-description',
  templateUrl: './womens-description.component.html',
  styleUrls: ['./womens-description.component.css']
})
export class WomensDescriptionComponent implements OnInit {

  productDescription: Model[] = []
  productToCart: Model[]=[]
  constructor(private cartService: addToCartService) { }

  addProductsToDescriptionPage() {
    for (let i = 0; i < this.cartService.selectedItems.length; i++) {
      this.productDescription.push(this.cartService.selectedItems[i])
    }
  }

  sendItemsToCart(){
 for(let i=0;i<this.cartService.totalProducts.length;i++){
   this.productToCart.push(this.cartService.totalProducts[i])
 }
  }
  ngOnInit(): void {
    this.addProductsToDescriptionPage();
  }

  sendItemToCart(id: number) {
    this.cartService.addWomensPageItems(id);
  }
  buyNow() {
    window.location.href = "/checkout"
  }

}
