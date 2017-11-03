import { TileService } from './../tile.service';
import { Tile } from './../tile';
import { TilebuttonComponent } from './../tilebutton/tilebutton.component';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TilesComponent implements OnInit {

  @Input() maintiles: Tile[];
  @Input() showSmall = false;
  @Input() parentTileId;

  constructor(private tileService: TileService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.parentTileId = params['id'];
    });
  }

  getTiles(): Array<Tile> {
    const arr: Array<Tile> = this.tileService.getTilesFor(this.parentTileId);
    if (arr.length === 0) {
      this.router.navigate(['/dns']);
      return;
    } else {
      return arr;
    }
  }

}
