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
    new Model(1, "Shirt", "assets/images/mensShirt.jfif",'70 $'),
    new Model(2, "Jeans", "assets/images/dealJeans.jpg",'700 $'),
    new Model(3, "Cap", "assets/images/mensCap.jpg",'52 $'),
    new Model(4, "Jacket", "assets/images/dealJacket.jpg",'900 $'),
    new Model(5, "Shoes", "assets/images/mensShoes.jpg",'400 $'),
    new Model(6, "Shorts", "assets/images/mensShorts.jpg",'150 $'),
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
