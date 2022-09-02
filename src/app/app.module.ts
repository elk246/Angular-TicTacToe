import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { EasyBoardComponent } from './easyBoard/easyBoard.component';
import {FlexModule} from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import { MenuComponent } from './menu/menu.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { ModeDialogComponent } from './mode-dialog/mode-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { MediumBoardComponent } from './medium-board/medium-board.component';
import { MediumSquareComponent } from './medium-square/medium-square.component';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    EasyBoardComponent,
    MenuComponent,
    ModeDialogComponent,
    MediumBoardComponent,
    MediumSquareComponent,
    WinnerDialogComponent
  ],
  imports: [
    BrowserModule,
    FlexModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    AppRoutingModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule,
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
