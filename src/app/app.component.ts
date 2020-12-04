import {Component, OnInit } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tommy Hegarty';
  themeClass = '';
  constructor(public overlayContainer: OverlayContainer) {}
  ngOnInit(): void {

  }
}
