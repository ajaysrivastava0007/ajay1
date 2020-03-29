import { Injectable } from "@angular/core";

import { Model } from "../app/model";

@Injectable({
  providedIn: "root"
})
export class ProductServiceService {
  constructor() {}

  productList: Model[] = [
    new Model(1, "Shoes", "assets/images/dealShoes.jpg", "600 $"),
    new Model(2, "Earphone", "assets/images/dealEarphone.jpg", "400 $"),
    new Model(3, "Gloves", "assets/images/dealGlove.jpg", "500 $"),
    new Model(4, "Jacket", "assets/images/dealJacket.jpg", "1000 $"),
    new Model(5, "T-shirt", "assets/images/dealTshirt.jpg", "600 $"),
    new Model(6, "Baggage", "assets/images/dealBag.jpg", "800 $"),
    new Model(7, "Onion", "assets/images/dealOnion.jpg", "10 $"),
    new Model(8, "Specs", "assets/images/dealSpecs.jpg", "300 $"),
    new Model(9, "Jeans", "assets/images/dealJeans.jpg", "700 $"),
    new Model(10, "Sandel", "assets/images/dealLadiesFootwear.jpg", "450 $"),
    new Model(11, "Sunglass", "assets/images/dealSunglass.jfif", "150 $"),
    new Model(12, "Brown-bread", "assets/images/dealBread.jfif", "15 $"),
  ];

  cartProducts: Model[] = [];
  getProducts(){
    return this.productList
  }
}
