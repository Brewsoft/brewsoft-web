import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroPanelComponent } from './hero-panel/hero-panel.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AboutUsPanelComponent } from './about-us-panel/about-us-panel.component';
import { BrewmasterPanelComponent } from './brewmaster-panel/brewmaster-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroPanelComponent,
    MainNavComponent,
    AboutUsPanelComponent,
    BrewmasterPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
