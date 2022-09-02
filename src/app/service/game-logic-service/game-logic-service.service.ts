import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {IDialogData} from "../../models/IDialogData";
import {WinnerDialogComponent} from "../../winner-dialog/winner-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class GameLogicServiceService {

  squares: any[];
  xIsNext: boolean;
  winner: string;
  gameFinish: boolean;

  constructor(private dialog: MatDialog) {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
    this.gameFinish = false;
  }

  public newGame(size: number) {
    this.squares = Array(size).fill(null);
    this.winner = '';
    this.xIsNext = true;

  }
  public get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  public makeMove(idx: number) {
    if(!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();

    if(this.gameFinish){
      let data: IDialogData;
      data = {
        message: 'The winner is ' + this.winner,
      };
      this.dialog.open(WinnerDialogComponent, {
        width: '25%',
        height: '20%',
        disableClose: true,
        data
      });
    }
  }

  private calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.gameFinish = true;
        return this.squares[a];
      }
    }
    return null;
  }
}
