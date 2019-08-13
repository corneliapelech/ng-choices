import { Injectable } from '@angular/core';

import cards from "../assets/data/cards.json";

export interface IActionCard {
  id: string;
  title: string;
  situation: string;
  choices: string;
  answerA: string;
  answerB: string;
  conclusionA: IConclusion;
  conclusionB: IConclusion;
}
export interface IConclusion {
  money: number;
  reputation: number;
  conscience: number;
  outcome: string;
}

@Injectable({
  providedIn: 'root'
})

export class ActionCardService {

  cards: IActionCard[] = [];

  constructor() {
    this.cards = cards.cards;
  }

  getCard(): IActionCard {
    return this.cards[Math.floor(Math.random()*this.cards.length)];
  }

}