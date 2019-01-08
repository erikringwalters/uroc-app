export class Tile {
  id: number;
  title: string;
  imagePath: string;
  url: string;
  details: string;

  constructor(id: number, path: string) {
      this.id = id;
      this.imagePath = path;
  }
  setDetails(url: string, title: string, details: string) {
      this.url = url;
      this.title = title;
      this.details = details;
  }
}

//let greeter = new Greeter("world");
