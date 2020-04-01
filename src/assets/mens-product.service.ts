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
    new Model(1, "Shirt", "assets/images/mensShirt.jfif",70,"Mens-Product"),
    new Model(2, "Jeans", "assets/images/dealJeans.jpg",75 ,"Mens-Product"),
    new Model(3, "Cap", "assets/images/mensCap.jpg",52,"Mens-Product"),
    new Model(4, "Jacket", "assets/images/dealJacket.jpg",90 ,"Mens-Product"),
    new Model(5, "Shoes", "assets/images/mensShoes.jpg",40 ,"Mens-Product"),
    new Model(6, "Shorts", "assets/images/mensShorts.jpg",15 ,"Mens-Product"),
  ]

  getMensProduct()
  {
    return this.mensProductList;
  }

  
    getSelectedItems(): Model[] {
      return this.mensList;
  }


}
