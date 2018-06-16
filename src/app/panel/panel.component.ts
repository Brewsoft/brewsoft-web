import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() windowHeight: number;
  @Input() windowWidth: number;
  @Input() backgroundImg: string;

  panelHeight: number;
  panelWidth: number;

  constructor() { }

  ngOnInit() {

  }

}
