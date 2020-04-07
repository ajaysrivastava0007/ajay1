import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ElectronicsSectionService } from 'src/assets/electronics-product.service';
import { addToCartService } from 'src/assets/addToCart.service';

@Component({
  selector: 'app-electronics-section',
  templateUrl: './electronics-section.component.html',
  styleUrls: ['./electronics-section.component.css']
})
export class ElectronicsSectionComponent implements OnInit {

  electronicsList:Model[]=[]
  constructor(private electronics: ElectronicsSectionService,
    private cartService: addToCartService,
    private addToCart: addToCartService) { }

  ngOnInit(): void {
    this.electronicsList = this.electronics.getProductList()
  }

  addProductToCart(id: number) {
    this.addToCart.addElectronicsPageItems(id)
  }
  
  sendItemTiDescription(id: number){
    this.cartService.addElectronicsItemOfDescription(id)
  }
}
