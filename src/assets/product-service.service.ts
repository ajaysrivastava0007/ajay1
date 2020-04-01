import { Injectable } from "@angular/core";

import { Model } from "../app/model";

@Injectable({
  providedIn: "root"
})
export class ProductServiceService {
  constructor() {}

  productList: Model[] = [
    new Model(1, "Shoes", "assets/images/dealShoes.jpg", 3000 ,"Deal-Product"),
    new Model(2, "Earphone", "assets/images/dealEarphone.jpg", 500,"Deal-Product"),
    new Model(3, "Gloves", "assets/images/dealGlove.jpg", 300 ,"Deal-Product"),
    new Model(4, "Jacket", "assets/images/dealJacket.jpg", 1500 ,"Deal-Product"),
    new Model(5, "T-shirt", "assets/images/dealTshirt.jpg", 350,"Deal-Product"),
    new Model(6, "Bag", "assets/images/dealBag.jpg", 800 ,"Deal-Product"),
    new Model(7, "Onion", "assets/images/dealOnion.jpg", 20 ,"Deal-Product"),
    new Model(8, "Specs", "assets/images/dealSpecs.jpg", 400,"Deal-Product"),
    new Model(9, "Jeans", "assets/images/dealJeans.jpg", 1700 ,"Deal-Product"),
    new Model(10, "Sandel", "assets/images/dealLadiesFootwear.jpg", 450 ,"Deal-Product"),
    new Model(11, "Sunglass", "assets/images/dealSunglass.jfif", 250 ,"Deal-Product"),
    new Model(12, "Brown-bread", "assets/images/dealBread.jfif", 35,"Deal-Product"),
    new Model(13, "Denim-Jacket", "assets/images/dealDenimJacket.jpg", 1000,"Deal-Product"),
    new Model(14, "Kurti", "assets/images/dealKurti.jpg", 350,"Deal-Product"),
    new Model(15, "Ruck Sack", "assets/images/dealRuckSack.jpg", 900,"Deal-Product"),
    new Model(16, "Sweater", "assets/images/dealSweater.jpg", 1200,"Deal-Product"),
    new Model(17, "Sneaker", "assets/images/dealSneakers.jpg", 800,"Deal-Product"),
    new Model(18, "Formal Shoes", "assets/images/dealFormalShoes.jpg", 2000,"Deal-Product"),
  ]

  cartProducts: Model[] = [];
  getProducts(){
    return this.productList.slice()
  }
}
