import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import cards from "../../assets/data/cards.json";

export interface IActionCard {
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
    this.cards = cards;
  }

  getCard(): Observable<IActionCard> {
    const link = '/assets/data/cards/'+ this.cards[Math.floor(Math.random()*this.cards.length)] + '.json';
    return this.http.get(link) as Observable<IActionCard>;
  }

}