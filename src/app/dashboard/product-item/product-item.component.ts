import { Component, OnInit,Input } from '@angular/core';
import { addToCartService } from '../../../assets/addToCart.service'
import { Model } from 'src/app/model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Model
  
  constructor(private cartService: addToCartService) { }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.cartService.sendItem(this.productItem);
  }
}
