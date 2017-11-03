import { Tile } from './tile';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TileService {

  private tileClickedSource = new Subject<Tile>();

  tileClicked$ = this.tileClickedSource.asObservable();

  emitTileClicked(tile: Tile) {
    this.tileClickedSource.next(tile);
  }

  getTilesFor(parentid: string): Array<Tile> {
    if (parentid == null || '' === parentid) {
      // return StaticTileData.tiletree[StaticTileData.rootid];
      return StaticTileData.allroutes.filter(t => t.parentid === StaticTileData.rootid);
    } else {
      // return StaticTileData.tiletree[parentid];
      return StaticTileData.allroutes.filter(t => t.parentid === parentid);
    }
  }

  getTileWithId(id: string): Tile {
    return StaticTileData.allroutes.find(t => t.id === id);
  }
}

class StaticTileData {

  static rootid = '<root-id>';
  static allroutes = [
    new Tile('home', '', 'Demand and Supply Dashboard', '/dns', '../../assets/images/home.svg', false),
    new Tile('back', '', 'Back', '', '../../assets/images/back.svg', false),
    // '<root-id>':
    new Tile('demand', StaticTileData.rootid, 'Demand', '/dns/demand', '../../assets/images/demand.png', true),
    new Tile('supply', StaticTileData.rootid, 'Supply', '/dns/supply', '../assets/images/supply.svg', true),
    new Tile('prod', StaticTileData.rootid, 'Schedule', '/dns/prod', '../assets/images/production.svg', true),
    new Tile('transport', StaticTileData.rootid, 'Transportation', '/dns/transport', '../assets/images/transport.svg', true),
    // 'demand':
    new Tile('fc', 'demand', 'Forecasting', '/dnsdetails/fc', '../../assets/images/generic.svg', true),
    new Tile('col1', 'demand', 'Collection', '/dnsdetails/col1', '../assets/images/generic.svg', true),
    new Tile('amp', 'demand', 'Map', '/dnsdetails/amp', '../assets/images/generic.svg', true),
    new Tile('txt1', 'demand', 'Demand Text', '/dnsdetails/txt1', '../assets/images/generic.svg', true),
    new Tile('txt11', 'demand', 'Demand Text 1', '/dnsdetails/txt11', '../assets/images/generic.svg', true),
    new Tile('txt12', 'demand', 'Demand Text 2', '/dnsdetails/txt12', '../assets/images/generic.svg', true),
    new Tile('txt13', 'demand', 'Demand Text 3', '/dnsdetails/txt13', '../assets/images/generic.svg', true),
    // 'supply':
    new Tile('sup2', 'supply', 'Supply Text', '/dnsdetails/sup2', '../assets/images/generic.svg', true),
    new Tile('sup3', 'supply', 'Big Supply', '/dnsdetails/sup3', '../assets/images/generic.svg', true),
    new Tile('sup4', 'supply', 'No Supply', '/dnsdetails/sup4', '../assets/images/generic.svg', true),
    // 'prod':
    new Tile('prod1', 'prod', 'Schedule Options', '/dnsdetails/prod1', '../../assets/images/generic.svg', true),
    new Tile('prod2', 'prod', 'Production Text 2', '/dnsdetails/prod2', '../assets/images/generic.svg', true),
    new Tile('prod3', 'prod', 'Production Text 3', '/dnsdetails/prod3', '../assets/images/generic.svg', true),
    new Tile('prod4', 'prod', 'Production Text 4', '/dnsdetails/prod4', '../assets/images/generic.svg', true),
    new Tile('prod5', 'prod', 'Production Text 5', '/dnsdetails/prod5', '../assets/images/generic.svg', true),
    new Tile('prod6', 'prod', 'Production Text 6', '/dnsdetails/prod6', '../assets/images/generic.svg', true),
    // 'transport':
    new Tile('veh', 'transport', 'Vehicle Management', '/dnsdetails/veh', '../../assets/images/generic.svg', true),
    new Tile('vis', 'transport', 'Visibility', '/dnsdetails/vis', '../assets/images/generic.svg', true),
    new Tile('tel', 'transport', 'Telematics', '/dnsdetails/tel', '../assets/images/generic.svg', true),
    new Tile('tr', 'transport', 'More Transportation', '/dnsdetails/tr', '../assets/images/generic.svg', true),
  ];

}
