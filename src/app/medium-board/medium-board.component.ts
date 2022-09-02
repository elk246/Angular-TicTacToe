import { Component, OnInit } from '@angular/core';
import {GameLogicServiceService} from "../service/game-logic-service/game-logic-service.service";

@Component({
  selector: 'app-medium-board',
  templateUrl: './medium-board.component.html',
  styleUrls: ['./medium-board.component.scss']
})
export class MediumBoardComponent implements OnInit {

  constructor(public gameLogicService: GameLogicServiceService) {
  }

  public ngOnInit(): void {
    this.gameLogicService.newGame(9);
  }

}
