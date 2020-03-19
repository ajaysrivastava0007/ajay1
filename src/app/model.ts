export class Model {
  id: number;
  name: string;
  image: string;

  constructor(id, name, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}
