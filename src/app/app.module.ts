import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';


import { CookieService } from 'angular2-cookie/services/cookies.service';
import { TileService } from './tile.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [ CookieService, TileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
