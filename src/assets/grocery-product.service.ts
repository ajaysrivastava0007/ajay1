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
  ]

  getGroceryProduct()
  {
    return this.groceryProductList;
  }
}
