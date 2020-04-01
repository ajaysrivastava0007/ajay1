import { Component, OnInit } from '@angular/core';
import { MensProductService } from '../../assets/mens-product.service'
import { Model } from '../model';
import { addToCartService } from 'src/assets/addToCart.service';
import { AddMensProductToCartService } from 'src/assets/add-mens-product-to-cart.service';

@Component({
  selector: 'app-men-section',
  templateUrl: './men-section.component.html',
  styleUrls: ['./men-section.component.css']
})
export class MenSectionComponent implements OnInit {

mensList: Model[]=[]

  constructor(private mens: MensProductService,
    private addToCart: AddMensProductToCartService) { }

  ngOnInit(): void {
    this.mensList = this.mens.getMensProduct();
  }

  addProductToCart(id:number){
    this.addToCart.addMensItems(id)
  }

}
