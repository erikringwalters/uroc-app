import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Tile } from '../tile'
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
        [
          style({opacity: 0, transform: 'translateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'})))
        ], { optional: true }),
        query(':leave', animate('50ms', style ({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  tiles =  new Array <Tile>();

  constructor(private _cookieService : CookieService) {
    for (let i = 0; i <= 23; i++) { // loop through tiles and assign
      //add new tile with id and image path
      let imagePath = '../../assets/img/quilt-tiles/image (' + i + ').jpg';
      let newTile = new Tile(i, imagePath);
      this.tiles.push(newTile);
    }
   }

  ngOnInit() {
    this.setCookie('eriksCookie', 'yummy');
  }

  setCookie(key: string, value: string) {
    this._cookieService.put(key, value);
  }


}
