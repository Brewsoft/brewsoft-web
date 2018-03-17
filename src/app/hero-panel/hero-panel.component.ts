import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-panel',
  templateUrl: './hero-panel.component.html',
  styleUrls: ['./hero-panel.component.scss']
})
export class HeroPanelComponent implements OnInit {

  constructor() { }

  backgroundImageUrl = 'assets/images/kevin-364843-unsplash.jpg';

  panelTitleRightList = [
    'Software',
    'Ideas',
    'Solutions',
    'Innovations',
  ];

  panelTitleRight = this.panelTitleRightList[0];

  setPanelTitle(index: number) {
    let me = this;

    let newString = this.panelTitleRightList[index];
    let oldString = this.panelTitleRight;

    let oldStringLength = oldString.length;
    let newStringLength = newString.length;

    let i = 0;
    let j = newStringLength;

    return new Promise(resolve => {
        let timer = window.setInterval(() => {
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
    var me = this;

    setInterval(() => {
      if (index === me.panelTitleRightList.length) {
        index = 0;
      };

      me.setPanelTitle(index).then(function() {
        index += 1;
      });

    }, 5000)
  }

  ngOnInit() {
    this.panelTitleTimer();
  }

}
