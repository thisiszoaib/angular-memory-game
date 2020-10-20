import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from '../card-data.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() data: CardData;

  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
