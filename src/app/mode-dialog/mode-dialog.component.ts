import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-mode-dialog',
  templateUrl: './mode-dialog.component.html',
  styleUrls: ['./mode-dialog.component.scss']
})
export class ModeDialogComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  public ngOnInit(): void {
  }

  public navigateToEasyGame() {
    this.dialog.closeAll();
    this.router.navigate(['/easyGame']).then(r => {});
  }

  public navigateToMediumGame() {
    this.dialog.closeAll();
    this.router.navigate(['/mediumGame']).then(r => {});
  }

}
