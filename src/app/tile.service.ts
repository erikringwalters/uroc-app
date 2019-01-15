import { Injectable } from '@angular/core';
import { Tile } from './tile';


@Injectable({
  providedIn: 'root'
})
export class TileService {

  // var firstTile {
  //   key: a,
  //   details: "",
  //   url: ""
  // }

  tiles =  new Array <Tile>();

  constructor() {
    for (let i = 0; i <= 23; i++) { // loop through tiles and assign
      //add new tile with id and image path
      let imagePath = '../assets/img/quilt-tiles/image (' + i + ').jpg';
      let newTile = new Tile(i, imagePath);
      this.tiles.push(newTile);
    }
   }

   setTilesImgs() {

   }

   setTileDetails(tile: Tile) {

   }
}
