import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { GrocerySectionService } from 'src/assets/grocery-product.service';

@Component({
  selector: 'app-grocery-section',
  templateUrl: './grocery-section.component.html',
  styleUrls: ['./grocery-section.component.css']
})
export class GrocerySectionComponent implements OnInit {

  groceryList:Model[]=[]
  constructor(private grocery: GrocerySectionService) { }

  ngOnInit(): void {
    this.groceryList = this.grocery.getGroceryProduct();
  }

}
