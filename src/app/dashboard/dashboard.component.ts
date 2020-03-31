import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "../../assets/product-service.service";
import { addToCartService } from "../../assets/addToCart.service";
import { Model } from "../model";
import { LoginService } from '../../assets/login.service'

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [ProductServiceService]
})
export class DashboardComponent implements OnInit {
  products: Model[] = [];
  clicked = true;
  constructor(
    private productService: ProductServiceService,
    private cartService: addToCartService,

  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  sendItemToCart(id: number) {
    this.cartService.addHomePageItems(id);
  }

}
