import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class WomensSectionService {

  constructor() { }
  womensProductList:Model[]=[
    new Model(1, 'Saree','assets/images/womensSaree.jpg','551 $'),
    new Model(2, 'Tops','assets/images/womensTop.jpg','130 $'),
    new Model(3, 'Shoes','assets/images/womensShoes.jpg', '400 $'),
    new Model(4, 'Coat','assets/images/womenCoat.jpg', '500 $'),
    new Model(5, 'Shawl','assets/images/womenShawl.jpg', '350 $'),
    new Model(6, 'Sandels','assets/images/dealLadiesFootwear.jpg', '100 $'),
    
  ]

  getWomensProduct(){
    return this.womensProductList;
  }
}
