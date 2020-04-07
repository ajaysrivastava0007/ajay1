import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { GrocerySectionService } from 'src/assets/grocery-product.service';
import { addToCartService } from 'src/assets/addToCart.service';

@Component({
  selector: 'app-grocery-section',
  templateUrl: './grocery-section.component.html',
  styleUrls: ['./grocery-section.component.css']
})
export class GrocerySectionComponent implements OnInit {

  groceryList: Model[] = []
  constructor(private grocery: GrocerySectionService,
    private cartServices: addToCartService,
    private addToCart: addToCartService) { }

  ngOnInit(): void {
    this.groceryList = this.grocery.getGroceryProduct();
  }

  addProductToCart(id: number) {
    this.addToCart.addGroceryPageItems(id)
  }
  sendItemTodescription(id: number) {
this.cartServices.addGroceryItemOfDescription(id);
  }
}
