import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';
import { MensProductService } from './mens-product.service';

@Injectable({
  providedIn: 'root'
})
export class AddMensProductToCartService {

  selectedItemsForMens: Model[] = []

  constructor(private mensProductList: MensProductService) { }

  getMensItems(): Model[] {
    return this.mensProductList.mensList;
  }
  getMensSelectedItems(): Model[] {
    return this.selectedItemsForMens;
  }

  addMensItems(id: number) {
    let item = this.mensProductList.mensList.find(ob => ob.id === id);
    if (this.selectedItemsForMens.indexOf(item) < 0) {
      this.selectedItemsForMens.push(item)
    }
  }
  removeMensItems(id: number) {
    let item = this.selectedItemsForMens.find(ob => ob.id === id)
    let itemIndex = this.selectedItemsForMens.indexOf(item);
    this.selectedItemsForMens.splice(itemIndex, 1)
  }
}
