import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { addToCartService } from 'src/assets/addToCart.service';
import { MensProductService } from 'src/assets/mens-product.service';
import { ProductServiceService } from 'src/assets/product-service.service';
import { WomensSectionService } from 'src/assets/womens-product.service';
import { ElectronicsSectionService } from 'src/assets/electronics-product.service';
import { GrocerySectionService } from 'src/assets/grocery-product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  productDescription: Model[] = []
  productToCart: Model[] = []
  constructor(private cartService: addToCartService,
    private productService: ProductServiceService,
    private mensProductList: MensProductService,
    private womensProductList: WomensSectionService,
    private electronicsProductList: ElectronicsSectionService,
    private groceryProductList: GrocerySectionService, ) { }

  addProductsToDescriptionPage() {
    for (let i = 0; i < this.cartService.selectedItems.length; i++) {
      this.productDescription.push(this.cartService.selectedItems[i])
    }
  }

  sendItemsToCart() {
    for (let i = 0; i < this.cartService.totalProducts.length; i++) {
      this.productToCart.push(this.cartService.totalProducts[i])
    }
  }
  ngOnInit(): void {
    this.addProductsToDescriptionPage();
  }

  sendItemToCart(id: number) {
    // this.cartService.addHomePageItems(id);
    let item = this.productService.productList.find(ob => ob.id === id);
    if (this.cartService.totalProducts.indexOf(item) < 0) {
      this.cartService.totalProducts.push(item);
    }
    let item1 = this.mensProductList.mensProductList.find(ob => ob.id === id);
    if (this.cartService.totalProducts.indexOf(item1) < 0) {
      this.cartService.totalProducts.push(item1);
    }
  }
  
  buyNow() {
    window.location.href = "/checkout"
  }
}
