import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class GrocerySectionService {

  
  constructor() { }
  groceryProductList:Model[]=[
    new Model(1, 'Refined-Oil', 'assets/images/groceryFortuneOil.jpg',8,"Grocery-Product"),
    new Model(2, 'Apple', 'assets/images/groceryApple.jpg',3,"Grocery-Product"),
    new Model(3, 'Tomato', 'assets/images/groceryTomato.jpg',1 ,"Grocery-Product"),
    new Model(4, 'White-Rice', 'assets/images/groceryRice.jpg',54,"Grocery-Product"),
    new Model(5, 'Onion', 'assets/images/dealOnion.jpg',2,"Grocery-Product"),
    new Model(6, 'Breads', 'assets/images/dealBread.jfif',1.5 ,"Grocery-Product"),
  ]

  getGroceryProduct()
  {
    return this.groceryProductList;
  }
}
