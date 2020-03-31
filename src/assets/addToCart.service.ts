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
  selectedItemsForMens: Model[]=[]
  getItems(): Model[] {
return this.productService.productList;
  }
  getMensItems(): Model[] {
    return this.mensProductList.mensList;
      }
  getSelectedItems(): Model[] {
return this.selectedItems;
  }	
  getMensSelectedItems(): Model[] {
    return this.selectedItemsForMens;
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

  addMensItems(id:number)
  {
    let item = this.selectedItemsForMens.find(ob=>ob.id === id);
    if(this.selectedItemsForMens.indexOf(item)<0){
      this.selectedItemsForMens.push(item)
    }
  }
 
 
  removeMensItems(id:number){
    let item = this.mensProductList.mensList.find(ob=>ob.id === id)
    let itemIndex = this.mensProductList.mensList.indexOf(item);
    this.selectedItemsForMens.splice(itemIndex,1)
  }
}
