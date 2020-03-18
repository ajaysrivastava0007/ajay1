import { Injectable } from "@angular/core";

import { Iproduct } from "./InterfaceProduct";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import db from "db.json";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { analyzeAndValidateNgModules } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class ProductServiceService {
  constructor() {}

  getProducts(): any[] {
    return [
      { id: 1, name: "shoes", image: "assets/images/dealShoes.jpg" },
      { id: 2, name: "Earphone", image: "assets/images/dealEarphone.jpg" },
      { id: 3, name: "Gloves", image: "assets/images/dealGlove.jpg" },
      { id: 4, name: "jacket", image: "assets/images/dealJacket.jpg" },
      { id: 5, name: "Watch", image: "assets/images/dealWatch.jpg" },
      { id: 6, name: "tshirt", image: "assets/images/dealTshirt.jpg" },
      { id: 7, name: "Bag", image: "assets/images/dealBag.jpg" },
      { id: 8, name: "Onion", image: "assets/images/dealOnion.jpg" }
    ];
  }

  cartProducts: any[] = [];
}
