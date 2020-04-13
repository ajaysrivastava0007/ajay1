import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class ElectronicsSectionService {

  constructor() { }
  electronicsProductList: Model[] = [
    new Model(1, 'I-phone', 'assets/images/electronicsIphone.jpg', 90000, "Electronics-Product"),
    new Model(2, 'Laptop', 'assets/images/electronicsLaptop.jpg', 43000, "Electronics-Product"),
    new Model(3, 'Television', 'assets/images/electronicsLedTv.jpg', 19999, "Electronics-Product"),
    new Model(4, 'Trimmer', 'assets/images/electronicsTrimmer.jpg', 1499, "Electronics-Product"),
    new Model(5, 'Hair-Dryer', 'assets/images/electronicsHairDryer.jpg', 1999, "Electronics-Product"),
    new Model(6, 'Ear-Phones', 'assets/images/dealEarphone.jpg', 999, "Electronics-Product"),
    new Model(7, 'Ceiling Fan', 'assets/images/electronicsFan.jpg', 1399, "Electronics-Product"),
    new Model(8, 'Air-Conditioner', 'assets/images/electronicsAirConditioner.jpg', 29999, "Electronics-Product"),

  ]

  getProductList() {
    return this.electronicsProductList;
  }
}
