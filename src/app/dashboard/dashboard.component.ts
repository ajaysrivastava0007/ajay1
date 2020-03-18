import { Component, OnInit } from "@angular/core";
import { ProductServiceService } from "../../assets/product-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  providers: [ProductServiceService]
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  constructor(private service: ProductServiceService) {
    this.products = this.service.getProducts();
  }

  ngOnInit(): void {}

  addProductToCart() {
    for (let i = 0; i < this.products.length; i++) {
      this.service.cartProducts.push(this.products);
      
    }
    console.log("added")
  }
}
