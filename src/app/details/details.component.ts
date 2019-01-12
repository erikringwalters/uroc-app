import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TileService } from '../tile.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  tile$: Tile;
  constructor(private data: TileService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.tile$ = params.id);
  }

  ngOnInit() {
  }

}
