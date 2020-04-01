export class Model {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string

  constructor(id, name, image: string, price: number,category: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.category = category;
  }
}
