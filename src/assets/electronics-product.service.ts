import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsSectionService {

  constructor() { }
  electronicsProductList: Model[]=[
    new Model(1,'I-phone', 'assets/images/electronicsIphones.jpg',150 ,"Electronics-Product"),
    new Model(2,'Laptop', 'assets/images/electronicsLaptop.jpg',450,"Electronics-Product"),
    new Model(3,'Television', 'assets/images/electronicsTv.jpg', 180 ,"Electronics-Product"),
    new Model(4,'Trimmer', 'assets/images/electronicsTrimmer.jpg',90 ,"Electronics-Product"),
    new Model(3,'Hair-Dryer', 'assets/images/electronicsHair-Dryer.jpg',80 ,"Electronics-Product"),
    new Model(3,'Ear-Phones', 'assets/images/dealEarphone.jpg',6 ,"Electronics-Product"),
  ]

  getProductList()
  {
    return this.electronicsProductList;
  }
}
