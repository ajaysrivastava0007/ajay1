import { Component, OnInit, Input } from "@angular/core";
import { ProductServiceService } from "../../assets/product-service.service";
import { addToCartService } from "../../assets/addToCart.service";
import { Model } from "../model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  productList = [];
  constructor(private cartProduct: addToCartService) {}

  ngOnInit() {
    this.cartProduct.getItem().subscribe((product: Model) => {
      this.addProductToCart(product);
    });
  }
  addProductToCart(product: Model) {
    let productExists = false;

    if (!productExists) {
      this.productList.push({
        productId: product.id,
        productName: product.name
      });
    }
  }
}
