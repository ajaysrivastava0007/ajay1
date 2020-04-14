import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { addToCartService } from 'src/assets/addToCart.service';

@Component({
  selector: 'app-grocery-description',
  templateUrl: './grocery-description.component.html',
  styleUrls: ['./grocery-description.component.css']
})
export class GroceryDescriptionComponent implements OnInit {

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
    this.cartService.addGroceryPageItems(id);
  }
  buyNow() {
    window.location.href = "/checkout"
  }

}
