import { Injectable } from '@angular/core';
import { Model } from '../app/model'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensProductService {

  private Subject = new Subject<Model>();
  constructor() { }

  mensProductList: Model[]=[
    new Model(1, "Shirt", "assets/images/mensShirt.jfif"),
    new Model(2, "Jeans", "assets/images/dealJeans.jpg"),
    new Model(3, "Cap", "assets/images/mensCap.jpg"),
    new Model(4, "Jacket", "assets/images/dealJacket.jpg"),
    new Model(5, "Shoes", "assets/images/mensShoes.jpg"),
    new Model(6, "Shorts", "assets/images/mensShorts.jpg"),
  ]

  getMensProduct()
  {
    return this.mensProductList;
  }

  sendMessage(model: Model[]=[])
  {
    this.Subject.next();
  }
  getMessage(): Observable<Model> {
    return this.Subject.asObservable();
}
}
