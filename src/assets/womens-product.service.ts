import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class WomensSectionService {

  constructor() { }
  womensProductList:Model[]=[
    new Model(1, 'Saree','assets/images/womensSaree.jpg',1500,"Womens-Product"),
    new Model(2, 'Tops','assets/images/womensTop.jpg',1300,"Womens-Product"),
    new Model(3, 'Shoes','assets/images/womensShoes.jpg', 1000,"Womens-Product"),
    new Model(4, 'Coat','assets/images/womenCoat.jpg', 5000 ,"Womens-Product"),
    new Model(5, 'Shawl','assets/images/womenShawl.jpg', 700 ,"Womens-Product"),
    new Model(6, 'Sandels','assets/images/dealLadiesFootwear.jpg', 800,"Womens-Product"),
    new Model(7, 'Sweater','assets/images/dealSweater.jpg', 1200,"Womens-Product"),
    new Model(8, 'Kurti','assets/images/dealKurti.jpg', 350,"Womens-Product"),
    
  ]

  getWomensProduct(){
    return this.womensProductList;
  }
}
