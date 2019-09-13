import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile';
import { ActivatedRoute } from '@angular/router';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  tileID$: number;
  tile: Tile;
  id: number;

  nextTile: Tile;
  prevTile: Tile;

  nextTilePath: string;
  prevTilePath: string;


  constructor(private _tileService: TileService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.tileID$ = params.id);

    this.tile = _tileService.getTile(this.tileID$);
    this.nextTile = _tileService.getTile(Number(this.tileID$) + 1);
    this.prevTile = _tileService.getTile(Number(this.tileID$) - 1);
  }

  ngOnInit() {
  }

}
