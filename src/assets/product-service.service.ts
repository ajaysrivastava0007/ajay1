import { Injectable } from "@angular/core";

import { Model } from "../app/model";

@Injectable({
  providedIn: "root"
})
export class ProductServiceService {
  constructor() {}

  productList: Model[] = [
    new Model(1, "Shoes", "assets/images/dealShoes.jpg"),
    new Model(2, "Earphone", "assets/images/dealEarphone.jpg"),
    new Model(3, "Gloves", "assets/images/dealGlove.jpg"),
    new Model(4, "Jacket", "assets/images/dealJacket.jpg"),
    new Model(5, "T-shirt", "assets/images/dealTshirt.jpg"),
    new Model(6, "Baggage", "assets/images/dealBag.jpg"),
    new Model(7, "Onion", "assets/images/dealOnion.jpg"),
    new Model(8, "Specs", "assets/images/dealSpecs.jpg"),
    new Model(9, "Jeans", "assets/images/dealJeans.jpg"),
    new Model(10, "Sandel", "assets/images/dealLadiesFootwear.jpg"),
    new Model(11, "Sunglass", "assets/images/dealSunglass.jfif"),
    new Model(12, "Brown-bread", "assets/images/dealBread.jfif"),
  ];

  cartProducts: Model[] = [];
  getProducts(){
    return this.productList
  }
}
