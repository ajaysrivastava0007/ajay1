export class Model {
  id: number;
  name: string;
  image: string;
  price: string;

  constructor(id, name, image: string, price: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
  }
}
