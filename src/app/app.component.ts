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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.resizeEvent.next(event.target as Window);
  }

  OnInit() {
    this.resizeEvent.next(window);
  }
}
