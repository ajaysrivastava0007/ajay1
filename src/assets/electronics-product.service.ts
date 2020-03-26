import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsSectionService {

  constructor() { }
  electronicsProductList: Model[]=[
    new Model(1,'I-phone', 'assets/images/electronicsIphones.jpg'),
    new Model(2,'Laptop', 'assets/images/electronicsLaptop.jpg'),
    new Model(3,'Television', 'assets/images/electronicsTv.jpg'),
  ]

  getProductList()
  {
    return this.electronicsProductList;
  }
}
