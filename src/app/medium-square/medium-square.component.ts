import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-medium-square',
  templateUrl: './medium-square.component.html',
  styleUrls: ['./medium-square.component.scss']
})
export class MediumSquareComponent implements OnInit {

  @Input() mediumValue: 'X' | 'O' | null;

  constructor() {
    this.mediumValue = null;
  }

  public ngOnInit(): void {
  }

}
