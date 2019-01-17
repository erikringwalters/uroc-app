import { Injectable } from '@angular/core';
import { Tile } from './tile';
import { KeyedCollection } from 'KeyedCollection';


@Injectable({
  providedIn: 'root'
})
export class TileService {


  tiles = new KeyedCollection<Tile>();

  constructor() {
    for (let i = 0; i <= 23; i++) { // loop through tiles and assign
      //add new tile with id and image path
      let imagePath = 'https://lapstg01.blob.core.windows.net/lap04/image%20(' + i + ').jpg';
      let newTile = new Tile(i, imagePath);
      this.tiles.Add(String(i), newTile);
    }

    var a = "detailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkjdetailsdetailsdetailsdet ai l sdetailsdetails  deta ilsdetails sdlfk sdlkf lksjdf lkjsdf lkjsjdf lkkjsdf lkjsdfkl ads;lfk jja;ldskfj a;lskdjf ;laskdkjf ;laksdjf ;lkajdjsf ;lkajsjd f;lkajd;flkjja;dldlkfkja;ldkfja;slldkjf;lakdjf;lak ;lksdjf a;lk j; llkj ;l;kj ;lk j;lk; j ;lk;j lk jkl lkj";
    this.setDetails(0,"hat", a);
   }

   setDetails(id: number, title: string, details: string) {
    this.tiles.Item(String(id)).title = title;
    this.tiles.Item(String(id)).details = details;
   }

   getTile(id: number) {
    return this.tiles.Item(String(id));
   }

   getTileID(id: number) {
    return this.tiles;
   }
}
