import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Subject } from 'rxjs';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  windowHeight: number;
  windowWidth: number;

  languages = [
    'Typescript',
    'JavaScript',
    'C#',
    'CSS, SASS & LESS',
    'Liquid',
    'VB',
    'PLSQL (Oracle)',
    'TSQL (SQL Server)',
    'Python',
    'MySQL',
    'MongoDB',
    'AngularJS (2.x & legacy)',
    'Angular Material',
    '.NET Core',
    'JQuery',
    'Shopify Timber',
    'Bootstrap',
    'Bourbon',
    'Neat',
    'Django',
    'Node.JS',
    'Docker',
    'Grunt',
    // 'Adobe Photoshop & Lightroom',
    'Gulp',
  ];

  constructor() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() {
    // this.resizeEvent.subscribe(event => {
    //   this.windowHeight = event.innerHeight;
    //   this.windowWidth = event.innerWidth;
    // });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const window = event.target as Window;

    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
}
