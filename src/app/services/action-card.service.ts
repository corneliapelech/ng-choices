import { Injectable } from '@angular/core';

import cards from "../assets/data/cards.json";

interface IActionCard {
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
  moneyModifier: number;
  reputationModifier: number;
  conscienceModifier: number;
  outcome: string;
}

@Injectable({
  providedIn: 'root'
})

export class ActionCardService {

  cards: IActionCard[] = [];

  constructor() {
    this.cards = cards;
    console.log(this.cards);
  }

}