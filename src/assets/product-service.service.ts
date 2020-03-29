import { Injectable } from "@angular/core";

import { Model } from "../app/model";

@Injectable({
  providedIn: "root"
})
export class ProductServiceService {
  constructor() {}

 private productList: Model[] = [
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
    new Model(13, "Denim-Jacket", "assets/images/dealDenimJacket.jpg", "450 $"),
    new Model(14, "Kurti", "assets/images/dealKurti.jpg", "250 $"),
    new Model(15, "Ruck Sack", "assets/images/dealRuckSack.jpg", "400 $"),
    new Model(16, "Sweater", "assets/images/dealSweater.jpg", "300 $"),
    new Model(17, "Sneaker", "assets/images/dealSneakers.jpg", "800 $"),
    new Model(18, "Formal Shoes", "assets/images/dealFormalShoes.jpg", "300 $"),
  ]

  cartProducts: Model[] = [];
  getProducts(){
    return this.productList.slice()
  }
}
