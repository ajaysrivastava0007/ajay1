import { Injectable } from "@angular/core";

import { Model } from "../app/model";

@Injectable({
  providedIn: "root"
})
export class ProductServiceService {
  constructor() {}

  productList: Model[] = [
    new Model(1, "shoes", "assets/images/dealShoes.jpg"),
    new Model(2, "Earphone", "assets/images/dealEarphone.jpg"),
    new Model(3, "Gloves", "assets/images/dealGlove.jpg"),
    new Model(4, "jacket", "assets/images/dealJacket.jpg"),
    new Model(5, "tshirt", "assets/images/dealTshirt.jpg"),
    new Model(6, "Bag", "assets/images/dealBag.jpg"),
    new Model(7, "Onion", "assets/images/dealOnion.jpg"),
    new Model(8, "specs", "assets/images/dealSpecs.jpg"),
    new Model(9, "Jeans", "assets/images/dealJeans.jpg"),
    new Model(10, "sandel", "assets/images/dealLadiesFootwear.jpg")
  ];

  cartProducts: Model[] = [];
  getProducts(){
    return this.productList
  }
}
