import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile';
import { ActivatedRoute } from '@angular/router';
import { TileService } from '../tile.service';
import { ContentZoom } from 'react-content-zoom';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  tileID$: number;
  tile: Tile;
  id: number;
  constructor(private _tileService: TileService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.tileID$ = params.id);

    this.tile = _tileService.getTile(this.tileID$);
  }

  ngOnInit() {
  }

}
