import { Injectable } from '@angular/core';
import { Model } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class GrocerySectionService {

  
  constructor() { }
  groceryProductList:Model[]=[
    new Model(1, 'Refined-Oil', 'assets/images/groceryFortuneOil.jpg',102,"Grocery-Product"),
    new Model(2, 'Apple', 'assets/images/groceryApple.jpg',80,"Grocery-Product"),
    new Model(3, 'Tomato', 'assets/images/groceryTomato.jpg',20 ,"Grocery-Product"),
    new Model(4, 'White-Rice', 'assets/images/groceryRice.jpg',54,"Grocery-Product"),
    new Model(5, 'Onion', 'assets/images/dealOnion.jpg',20,"Grocery-Product"),
    new Model(6, 'Breads', 'assets/images/dealBread.jfif',30 ,"Grocery-Product"),
    new Model(7, 'Spinach', 'assets/images/grocerySpinach.jpg',15,"Grocery-Product"),
    new Model(8, 'Potato', 'assets/images/groceryPotato.jpg',10,"Grocery-Product"),
  ]

  getGroceryProduct()
  {
    return this.groceryProductList;
  }
}
