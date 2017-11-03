import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatIconModule, MatGridListModule} from '@angular/material';
import { TilesComponent } from './tiles/tiles.component';
import { TilebuttonComponent } from './tilebutton/tilebutton.component';
import { TiledDetailsComponent } from './tiledetails/tiledetails.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatTooltipModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    TilebuttonComponent,
    TiledDetailsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatGridListModule, MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TilesComponent, TilebuttonComponent, TiledDetailsComponent, SidebarComponent]
})
export class AppModule { }
