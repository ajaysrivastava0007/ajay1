import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ProductServiceService } from './product-service.service'
import { Model } from '../app/model'
import { MensProductService } from './mens-product.service';
import { WomensSectionService } from './womens-product.service';
import { ElectronicsSectionService } from './electronics-product.service';
import { GrocerySectionService } from './grocery-product.service';

@Injectable({
  providedIn: "root"
})
export class addToCartService {
  constructor(private productService: ProductServiceService,
    private mensProductList: MensProductService,
    private womensProductList: WomensSectionService,
    private electronicsProductList: ElectronicsSectionService,
    private groceryProductList: GrocerySectionService) { }

  selectedItems: Model[] = [];

  totalProducts: Model[] = [];
  wishlist: Model[]=[]

  // allProducts() {
  //   for (let i = 0; i < this.productService.productList.length; i++) {
  //     this.totalProducts.push(this.productService.productList[i]);
  //   }
  //   for (let i = 0; i < this.mensProductList.mensProductList.length; i++) {
  //     this.totalProducts.push(this.mensProductList.mensProductList[i]);
  //   }
  //   for (let i = 0; i < this.womensProductList.womensProductList.length; i++) {
  //     this.totalProducts.push(this.womensProductList.womensProductList[i])
  //   }
  //   for (let i = 0; i < this.electronicsProductList.electronicsProductList.length; i++) {
  //     this.totalProducts.push(this.electronicsProductList.electronicsProductList[i])
  //   }
  //   for (let i = 0; i < this.groceryProductList.groceryProductList.length; i++) {
  //     this.totalProducts.push(this.groceryProductList.groceryProductList[i])
  //   }
  // }

  getSelectedItems(): Model[] {
    return this.totalProducts;
  }

  addHomePageItems(id: number): void {
    let item = this.productService.productList.find(ob => ob.id === id);
    if (this.totalProducts.indexOf(item) < 0) {
      this.totalProducts.push(item);
    }
  }

  addMensPageItems(id: number): void {
    let item = this.mensProductList.mensProductList.find(ob => ob.id === id);
    if (this.totalProducts.indexOf(item) < 0) {
      this.totalProducts.push(item);
    }
  }

  addWomensPageItems(id: number): void {
    let item = this.womensProductList.womensProductList.find(ob => ob.id === id);
    if (this.totalProducts.indexOf(item) < 0) {
      this.totalProducts.push(item);
    }
  }

  addElectronicsPageItems(id: number): void {
    let item = this.electronicsProductList.electronicsProductList.find(ob => ob.id === id);
    if (this.totalProducts.indexOf(item) < 0) {
      this.totalProducts.push(item);
    }
  }

  addGroceryPageItems(id: number): void {
    let item = this.groceryProductList.groceryProductList.find(ob => ob.id === id);
    if (this.totalProducts.indexOf(item) < 0) {
      this.totalProducts.push(item);
    }
  }

  removeHomePageItems(id: number): void {
    let item = this.totalProducts.find(ob => ob.id === id);
    let itemIndex = this.totalProducts.indexOf(item);
    this.totalProducts.splice(itemIndex, 1);
  }

  addItemOfDescription(id: number) {
    let item = this.productService.productList.find(ob => ob.id === id);
    if (this.selectedItems.indexOf(item) < 0) {
      let itemIndex = this.selectedItems.indexOf(item);
      this.selectedItems.splice(itemIndex, 1);
      this.selectedItems.push(item)
    }

  }

  addMensItemOfDescription(id: number) {
    let item = this.mensProductList.mensProductList.find(ob => ob.id === id);
    if (this.selectedItems.indexOf(item) < 0) {
      let itemIndex = this.selectedItems.indexOf(item);
      this.selectedItems.splice(itemIndex, 1);
      this.selectedItems.push(item)
    }
  }

  addWomensItemOfDescription(id: number) {
    let item = this.womensProductList.womensProductList.find(ob => ob.id === id);
    if (this.selectedItems.indexOf(item) < 0) {
      let itemIndex = this.selectedItems.indexOf(item);
      this.selectedItems.splice(itemIndex, 1);
      this.selectedItems.push(item)
    }
  }

  addElectronicsItemOfDescription(id: number) {
    let item = this.electronicsProductList.electronicsProductList.find(ob => ob.id === id);
    if (this.selectedItems.indexOf(item) < 0) {
      let itemIndex = this.selectedItems.indexOf(item);
      this.selectedItems.splice(itemIndex, 1);
      this.selectedItems.push(item)
    }
  }

  addGroceryItemOfDescription(id: number) {
    let item = this.groceryProductList.groceryProductList.find(ob => ob.id === id);
    if (this.selectedItems.indexOf(item) < 0) {
      let itemIndex = this.selectedItems.indexOf(item);
      this.selectedItems.splice(itemIndex, 1);
      this.selectedItems.push(item)
    }
  }

  proceedFromCartToCheckoutPage(id: number) {
    let item = this.totalProducts.find(ob => ob.id === id);
    if (this.totalProducts.indexOf(item) < 0) {
      this.totalProducts.push(item);
    }
  }

sendProductToWishlist(id: number){
  let item = this.totalProducts.find(ob => ob.id === id)
  if(this.wishlist.indexOf(item) < 0){
    this.wishlist.push(item);
  }
}


}
