import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class addToCartService {
  subject = new Subject();
  constructor() {}

  sendItem(product) {
    
    this.subject.next(product);
    console.log(product);
  }

  getItem() {
    return this.subject.asObservable();
  }
}
