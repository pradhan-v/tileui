import { TiledDetailsComponent } from './tiledetails/tiledetails.component';
import { TilesComponent } from './tiles/tiles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dns', component: TilesComponent },
  { path: 'dns/:id', component: TilesComponent },
  { path: 'dnsdetails/:id', component: TiledDetailsComponent },
  { path: '', redirectTo: '/dns', pathMatch: 'full' },
  { path: '**', redirectTo: '/dns' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
