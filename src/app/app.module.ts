import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrewTickerComponent } from './brew-ticker/brew-ticker.component';
// import { HeroPanelComponent } from './hero-panel/hero-panel.component';
import { MainNavComponent } from './main-nav/main-nav.component';
// import { AboutUsPanelComponent } from './about-us-panel/about-us-panel.component';
// import { BrewmasterPanelComponent } from './brewmaster-panel/brewmaster-panel.component';
// import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BrewTickerComponent,
    MainNavComponent,
    // AboutUsPanelComponent,
    // BrewmasterPanelComponent,
    // MatMenuModule,
  ],
  imports: [
    BrowserModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
