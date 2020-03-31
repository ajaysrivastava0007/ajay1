import { Injectable } from '@angular/core';
import { Model } from '../app/model'
import { Subject, Observable } from 'rxjs';
import { threadId } from 'worker_threads';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MensProductService {

 mensList: Model[]=[];
  constructor() { }

  mensProductList: Model[]=[
    new Model(1, "Shirt", "assets/images/mensShirt.jfif",'70 $'),
    new Model(2, "Jeans", "assets/images/dealJeans.jpg",'75 $'),
    new Model(3, "Cap", "assets/images/mensCap.jpg",'52 $'),
    new Model(4, "Jacket", "assets/images/dealJacket.jpg",'90 $'),
    new Model(5, "Shoes", "assets/images/mensShoes.jpg",'40 $'),
    new Model(6, "Shorts", "assets/images/mensShorts.jpg",'15 $'),
  ]

  getMensProduct()
  {
    return this.mensProductList;
  }

  
    getSelectedItems(): Model[] {
      return this.mensList;
  }


}
