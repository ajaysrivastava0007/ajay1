import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { addToCartService } from 'src/assets/addToCart.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
 
  productDescription : Model[]=[]
  constructor(private cartService: addToCartService) { }

  getItemsForCart(): void {
    this.productDescription = this.cartService.getSelectedItems()
    }

  ngOnInit(): void {
    this.getItemsForCart();
  }
 
}
