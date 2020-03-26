import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { WomensSectionService } from 'src/assets/womens-product.service';

@Component({
  selector: 'app-women-section',
  templateUrl: './women-section.component.html',
  styleUrls: ['./women-section.component.css']
})
export class WomenSectionComponent implements OnInit {

  womensList: Model[]=[]
  constructor(private womens: WomensSectionService) { }

  ngOnInit(): void {
    this.womensList = this.womens.getWomensProduct();
  }

}
