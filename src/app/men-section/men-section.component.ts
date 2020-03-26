import { Component, OnInit } from '@angular/core';
import { MensProductService } from '../../assets/mens-product.service'
import { Model } from '../model';

@Component({
  selector: 'app-men-section',
  templateUrl: './men-section.component.html',
  styleUrls: ['./men-section.component.css']
})
export class MenSectionComponent implements OnInit {

mensList: Model[]=[]

  constructor(private mens: MensProductService) { }

  ngOnInit(): void {
    this.mensList = this.mens.getMensProduct();
  }

  addToCart()
  {
    this.mens.sendMessage(this.mensList);
  }

}
