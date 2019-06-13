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
interface IConclusion {
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
    this.cards = cards;
  }

  getCard(): IActionCard {
    /*const x = this.cards[Math.floor(Math.random()*this.cards.length)];
    console.log("card:", x);
    console.log("cards-length:", this.cards.length);
    console.log("cards", this.cards);*/
    return {
      id: "dummy-id",
      title: "dummy card title",
      situation: "Insert card text here that contains a situation-setup",
      choices: "This poses a question that can be answered.",
      answerA: "Left",
      answerB: "Right",
      conclusionA: {
        money: -1,
        reputation: 0,
        conscience: +1,
        outcome: "this is what happens after choosing Left"
      },
      conclusionB: {
        money: +1,
        reputation: 0,
        conscience: -1,
        outcome: "this is what happens after choosing Right"
      }
    }
  }

}