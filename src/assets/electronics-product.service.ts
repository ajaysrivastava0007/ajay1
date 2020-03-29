import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsSectionService {

  constructor() { }
  electronicsProductList: Model[]=[
    new Model(1,'I-phone', 'assets/images/electronicsIphones.jpg','1500 $'),
    new Model(2,'Laptop', 'assets/images/electronicsLaptop.jpg','4500 $'),
    new Model(3,'Television', 'assets/images/electronicsTv.jpg', '1800 $'),
    new Model(4,'Trimmer', 'assets/images/electronicsTrimmer.jpg','900 $'),
    new Model(3,'Hair-Dryer', 'assets/images/electronicsHair-Dryer.jpg','800 $'),
    new Model(3,'Ear-Phones', 'assets/images/dealEarphone.jpg','60 $'),
  ]

  getProductList()
  {
    return this.electronicsProductList;
  }
}
