import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCardModule, MatIconModule, MatMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrewTickerComponent } from './brew-ticker/brew-ticker.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PanelComponent } from './panel/panel.component';
import { PanelHeaderComponent } from './panel-header/panel-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BrewTickerComponent,
    MainNavComponent,
    PanelComponent,
    PanelHeaderComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, },
      // { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: '' }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
