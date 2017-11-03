import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {TileService} from '../tile.service';
import {Tile} from '../tile';

@Component({
  selector: 'app-tiledetails',
  templateUrl: './tiledetails.component.html',
  styleUrls: ['./tiledetails.component.css']
})
export class TiledDetailsComponent implements OnInit, CanActivate {

  @Input() tile: Tile = null;
  @Input() set tileid(id: string) {
    this.tile = this.tileService.getTileWithId(id);
  }

  constructor(private tileService: TileService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.tileid = params['id'];
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('asfsadfasfd');
    if (typeof (this.tile) === 'undefined') {
      this.router.navigate(['/dns']);
      return false;
    } else {
      return true;
    }
  }

  backClicked() {
    if (this.tile != null) {
      const t: Tile = this.tileService.getTileWithId(this.tile.parentid);
      if (t != null) {
        this.router.navigate(['/dns', t.id]);
        return;
      }
    }
    this.router.navigate(['/dns']);
  }

}
