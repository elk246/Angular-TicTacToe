import { Component, OnInit } from '@angular/core';
import {ModeDialogComponent} from "../mode-dialog/mode-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {tap} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public openModeDialog() {
    this.dialog.open(ModeDialogComponent, {
      disableClose: false,
      panelClass: 'modeDialog',
      width: '30%',
      height: '25%',
    })
  }

}
