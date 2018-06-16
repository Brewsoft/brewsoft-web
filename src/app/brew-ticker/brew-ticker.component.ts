import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-panel',
  templateUrl: './brew-ticker.component.html',
  styleUrls: ['./brew-ticker.component.scss']
})
export class BrewTickerComponent implements OnInit {

  constructor() { }

  // backgroundImageUrl = 'assets/images/kevin-364843-unsplash.jpg';

  panelTitleRightList = [
    'Software',
    'Ideas',
    'Solutions',
    'Innovations',
  ];

  panelTitleRight = this.panelTitleRightList[0];

  setPanelTitle(index: number) {
    const me = this;

    const newString = this.panelTitleRightList[index];
    const oldString = this.panelTitleRight;

    const oldStringLength = oldString.length;
    const newStringLength = newString.length;

    let i = 0;
    let j = newStringLength;

    return new Promise(resolve => {
        const timer = window.setInterval(() => {
          if (i < oldStringLength) {
            me.panelTitleRight = oldString.substring(0, oldStringLength - i);
            i++;
          } else if (j >= 0) {
            me.panelTitleRight = newString.substring(0, newStringLength - j);
            j--;
          } else {
            clearInterval(timer);
            resolve();
          }
        }, 100);
    });
  }

  async panelTitleTimer() {
    let index = 1;
    const me = this;

    setInterval(() => {
      if (index === me.panelTitleRightList.length) {
        index = 0;
      }

      me.setPanelTitle(index).then(function() {
        index += 1;
      });

    }, 5000);
  }

  ngOnInit() {
    this.panelTitleTimer();
  }

}
