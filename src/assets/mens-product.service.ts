import { Injectable } from '@angular/core';
import { Model } from '../app/model'

@Injectable({
  providedIn: 'root'
})
export class MensProductService {

  constructor() { }
  mensProductList: Model[]=[
    new Model(1, "shirt", "assets/images/mensShirt.jfif"),
    new Model(2, "jeans", "assets/images/mensJeans.jpg"),
    new Model(3, "cap", "assets/images/mensCap.jpg"),
  ]

  getMensProduct()
  {
    return this.mensProductList;
  }
}
