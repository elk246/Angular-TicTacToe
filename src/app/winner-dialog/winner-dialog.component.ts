import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IDialogData} from "../models/IDialogData";
import {Router} from "@angular/router";
import {GameLogicServiceService} from "../service/game-logic-service/game-logic-service.service";

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})
export class WinnerDialogComponent implements OnInit {

  constructor(private router: Router,
              public dialogRef: MatDialogRef<WinnerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IDialogData,
              private gameLogic: GameLogicServiceService
  ) { }

  public ngOnInit(): void {
    this.gameLogic.gameFinish = false;
  }

  public navigateToMenu(){
    this.dialogRef.close();
    this.router.navigate(['/']).then(r => {});
  }

  public navigateToNewGame(mode: string, size: number) {
    this.dialogRef.close();
    this.router.navigate(['/' + mode]).then(r => {} )
    this.gameLogic.newGame(size);
  }


}
