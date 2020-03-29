import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class GrocerySectionService {

  
  constructor() { }
  groceryProductList:Model[]=[
    new Model(1, 'Refined-Oil', 'assets/images/groceryFortuneOil.jpg','8 $'),
    new Model(2, 'Apple', 'assets/images/groceryApple.jpg','3 $'),
    new Model(3, 'Tomato', 'assets/images/groceryTomato.jpg','1 $'),
    new Model(4, 'White-Rice', 'assets/images/groceryRice.jpg','54 $'),
    new Model(5, 'Onion', 'assets/images/dealOnion.jpg','2 $'),
    new Model(6, 'Breads', 'assets/images/dealBread.jfif','1.5 $'),
  ]

  getGroceryProduct()
  {
    return this.groceryProductList;
  }
}
