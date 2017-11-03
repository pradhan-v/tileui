import { Tile } from './tile';
import { TileService } from './tile.service';
import { Component, ViewChild, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TileService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') sidenav: MatSidenav;
  title: string;
  sidebarOpen = false;
  subscription: Subscription;

  constructor(private tileService: TileService) {
    this.setTitle('Demand and Supply');
    this.subscription = tileService.tileClicked$.subscribe(this.tileClicked.bind(this));
  }

  setTitle(text: string) {
    this.title = text;
  }

  tileClicked(tile: Tile) {
    this.sidebarOpen = tile.showside;
    this.showSidenav(tile.showside);
    this.setTitle(tile.text);
  }

  ngOnInit() {

    // this.sidenav.onOpen.subscribe(() => {
    //   console.log('Sidenav opened');
    // });

    // setTimeout(this.openSidenav.bind(this), 5000);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showSidenav(show: boolean) {
    if (show) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }
}
