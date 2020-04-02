import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ProductServiceService } from './product-service.service'
import { Model } from '../app/model'
import { MensProductService } from './mens-product.service';

@Injectable({
  providedIn: "root"
})
export class addToCartService {
  constructor(private productService: ProductServiceService,
    private mensProductList: MensProductService){}
  
  selectedItems: Model[] = [];
  
  getItems(): Model[] {
return this.productService.productList;
  }
 
  getSelectedItems(): Model[] {
return this.selectedItems;
  }	
  
  addHomePageItems(id:number): void {
     let item = this.productService.productList.find(ob => ob.id === id);
     if (this.selectedItems.indexOf(item) < 0) {	   
      this.selectedItems.push(item);

     }
  }
  removeHomePageItems(id:number): void {
     let item = this.selectedItems.find(ob => ob.id === id);
     let itemIndex = this.selectedItems.indexOf(item);
     this.selectedItems.splice(itemIndex, 1);
  }    

  
  
 
}
