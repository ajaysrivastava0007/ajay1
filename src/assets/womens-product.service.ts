import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class WomensSectionService {

  constructor() { }
  womensProductList:Model[]=[
    new Model(1, 'Saree','assets/images/womensSaree.jpg'),
    new Model(2, 'Tops','assets/images/womensTop.jpg'),
    new Model(3, 'Shoes','assets/images/womensShoes.jpg'),
    new Model(4, 'Coat','assets/images/womenCoat.jpg'),
    new Model(5, 'Shawl','assets/images/womenShawl.jpg'),
    new Model(6, 'Sandels','assets/images/dealLadiesFootwear.jpg'),
    
  ]

  getWomensProduct(){
    return this.womensProductList;
  }
}
