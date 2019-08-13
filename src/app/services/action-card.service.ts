import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

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

  cards: string[] = [];

  constructor(private http: HttpClient) {
    this.cards = cards.cards;
  }

  getCard(): IActionCard {
    const link: string = '/assets/data/cards/' + this.cards[Math.floor(Math.random()*this.cards.length)] + '.json';
    console.log(link);
    const card$:Observable<IActionCard> = <Observable<IActionCard>> this.http.get(link);
    card$.subscribe(console.log);
    return null;
  }

}