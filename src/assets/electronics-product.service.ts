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
    new Model(4,'Trimmer', 'assets/images/electronicsTrimmer.jpg'),
    new Model(3,'Hair-Dryer', 'assets/images/electronicsHair-Dryer.jpg'),
    new Model(3,'Ear-Phones', 'assets/images/dealEarphone.jpg'),
  ]

  getProductList()
  {
    return this.electronicsProductList;
  }
}
