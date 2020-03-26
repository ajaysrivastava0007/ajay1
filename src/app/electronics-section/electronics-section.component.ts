import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ElectronicsSectionService } from 'src/assets/electronics-product.service';

@Component({
  selector: 'app-electronics-section',
  templateUrl: './electronics-section.component.html',
  styleUrls: ['./electronics-section.component.css']
})
export class ElectronicsSectionComponent implements OnInit {

  electronicsList:Model[]=[]
  constructor(private electronics: ElectronicsSectionService) { }

  ngOnInit(): void {
    this.electronicsList = this.electronics.getProductList()
  }

}
