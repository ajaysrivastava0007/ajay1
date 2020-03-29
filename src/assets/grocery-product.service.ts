import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class GrocerySectionService {

  
  constructor() { }
  groceryProductList:Model[]=[
    new Model(1, 'Refined-Oil', 'assets/images/groceryFortuneOil.jpg'),
    new Model(2, 'Apple', 'assets/images/groceryApple.jpg'),
    new Model(3, 'Tomato', 'assets/images/groceryTomato.jpg'),
    new Model(4, 'White-Rice', 'assets/images/groceryRice.jpg'),
    new Model(5, 'Onion', 'assets/images/dealOnion.jpg'),
    new Model(6, 'Breads', 'assets/images/dealBread.jfif'),
  ]

  getGroceryProduct()
  {
    return this.groceryProductList;
  }
}
