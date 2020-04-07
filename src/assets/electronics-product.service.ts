import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsSectionService {

  constructor() { }
  electronicsProductList: Model[]=[
    new Model(1,'I-phone', 'assets/images/electronicsIphones.jpg',90000 ,"Electronics-Product"),
    new Model(2,'Laptop', 'assets/images/electronicsLaptop.jpg',80000,"Electronics-Product"),
    new Model(3,'Television', 'assets/images/electronicsTv.jpg', 19999 ,"Electronics-Product"),
    new Model(4,'Trimmer', 'assets/images/electronicsTrimmer.jpg',1499 ,"Electronics-Product"),
    new Model(5,'Hair-Dryer', 'assets/images/electronicsHairDryer.jpg',1999 ,"Electronics-Product"),
    new Model(6,'Ear-Phones', 'assets/images/dealEarphone.jpg',999 ,"Electronics-Product"),
  ]

  getProductList()
  {
    return this.electronicsProductList;
  }
}
