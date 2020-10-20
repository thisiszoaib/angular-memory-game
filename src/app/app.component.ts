import { Component, OnInit } from '@angular/core';
import { CardData } from './card-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc'
  ];

  cards: CardData[] = [];

  flippedCards = [];

  shuffleArray(anArray: any[]): void {
    anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor() {

  }

  ngOnInit(): void {
    this.cardImages.forEach((image, idx) => {
      const cardData: CardData = {
        cardId: idx,
        imageId: image,
        state: 'default'
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });

    });

    this.shuffleArray(this.cards);

  }

}
