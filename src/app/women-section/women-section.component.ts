import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { WomensSectionService } from 'src/assets/womens-product.service';
import { addToCartService } from 'src/assets/addToCart.service';

@Component({
  selector: 'app-women-section',
  templateUrl: './women-section.component.html',
  styleUrls: ['./women-section.component.css']
})
export class WomenSectionComponent implements OnInit {

  womensList: Model[] = []
  constructor(private womens: WomensSectionService,
    private cartServices: addToCartService,
    private addToCart: addToCartService) { }

  ngOnInit(): void {
    this.womensList = this.womens.getWomensProduct();
  }

  addProductToCart(id: number) {
    this.addToCart.addWomensPageItems(id)
  }

  sendItemToDescription(id: number) {
    this.cartServices.addWomensItemOfDescription(id);
  }
}
