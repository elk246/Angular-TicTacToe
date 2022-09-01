import {Component, OnInit} from '@angular/core';
import {GameLogicServiceService} from "../service/game-logic-service/game-logic-service.service";

@Component({
  selector: 'app-easyBoard',
  templateUrl: './easyBoard.component.html',
  styleUrls: ['./easyBoard.component.css']
})
export class EasyBoardComponent implements OnInit {


  constructor(public gameLogicService: GameLogicServiceService) {
  }

  public ngOnInit(): void {
    this.gameLogicService.newGame(9);
  }
}
