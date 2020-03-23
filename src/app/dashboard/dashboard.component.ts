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
  constructor(
    private productService: ProductServiceService,
    private cartService: addToCartService,
    public login: LoginService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  loginButton() {

    window.location.href = "/login"
    this.login.setLoginStatus(1)

  }

  logoutButton() {
    this.login.setLoginStatus(0);

  }
}
