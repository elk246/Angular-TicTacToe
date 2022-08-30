import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {


  @Input() value: 'X' | 'O' | null;

  constructor() {
    this.value = null;
  }

  ngOnInit(): void {
  }

}
