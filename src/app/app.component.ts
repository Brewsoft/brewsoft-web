import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Brewsoft, LLC';

  resizeEvent = new Subject<Window>();

  OnInit() {
    this.resizeEvent.next(window);
  }
}
