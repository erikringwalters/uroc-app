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
}
