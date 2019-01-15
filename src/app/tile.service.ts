import { Injectable } from '@angular/core';
import { Tile } from './tile';
import { KeyedCollection } from 'KeyedCollection';


@Injectable({
  providedIn: 'root'
})
export class TileService {

  // var firstTile {
  //   key: a,
  //   details: "",
  //   url: ""
  // }

  // tiles =  new Array <Tile>();
  tiles = new KeyedCollection<Tile>();

  constructor() {
    for (let i = 0; i <= 23; i++) { // loop through tiles and assign
      //add new tile with id and image path
      let imagePath = '../assets/img/quilt-tiles/image (' + i + ').jpg';
      let newTile = new Tile(i, imagePath);
      this.tiles.Add(String(i), newTile);
    }

   }

   setTileDetails(title: string, url: string, description: string) {

   }
}
