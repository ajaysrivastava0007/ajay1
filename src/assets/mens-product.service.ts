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
    new Model(1, "Shirt", "assets/images/mensShirt.jfif",400,"Mens-Product"),
    new Model(2, "Jeans", "assets/images/dealJeans.jpg",1700 ,"Mens-Product"),
    new Model(3, "Cap", "assets/images/mensCap.jpg",300,"Mens-Product"),
    new Model(4, "Jacket", "assets/images/dealJacket.jpg",3500 ,"Mens-Product"),
    new Model(5, "Shoes", "assets/images/mensShoes.jpg",1500 ,"Mens-Product"),
    new Model(6, "Shorts", "assets/images/mensShorts.jpg",500 ,"Mens-Product"),
    new Model(7, "Sneakers", "assets/images/dealShoes.jpg",3000,"Mens-Product"),
    new Model(8, "T-Shirt", "assets/images/dealTshirt.jpg",350 ,"Mens-Product"),

  ]

  getMensProduct()
  {
    return this.mensProductList;
  }

  
    getSelectedItems(): Model[] {
      return this.mensList;
  }


}
