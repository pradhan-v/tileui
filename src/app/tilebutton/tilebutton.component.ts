import { Tile } from './../tile';
import { TileService } from './../tile.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tilebutton',
  templateUrl: './tilebutton.component.html',
  styleUrls: ['./tilebutton.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TilebuttonComponent implements OnInit {

  // @Input() imgsrc;
  // @Input() text;
  // @Input() link;
  showSmall = '';
  @Input() tile;
  @Input() set tileid(id: string) {
    this.tile = this.tileService.getTileWithId(id);
  }

  @Input() set small(val: boolean) {
    if (val) {
      this.showSmall = 'Small';
    } else {
      this.showSmall = '';
    }
  }

  // @Output() tileClicked = new EventEmitter();

  constructor(private tileService: TileService) { }

  ngOnInit() { }


  emitTileClicked() {
    // this.tileClicked.emit({ text: this.text, link: this.link });
    this.tileService.emitTileClicked(this.tile);
  }

}
