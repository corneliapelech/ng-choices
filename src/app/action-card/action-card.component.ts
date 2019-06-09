import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {
  cardId: string;
  title: string;
  cardContent: string;
  // imgSrc: string;
  // altText: string;
  answerA: string;
  answerB: string;

  constructor() { }

  ngOnInit() {
    this.loadCard();
  }

  loadCard() {
    this.cardId = "dummy-id";
    this.title = "dummy card title";
    this.cardContent = "Insert card text here that contains a situation-setup and poses a question that can be answered.";
    this.answerA = "Left";
    this.answerB = "Right";
  }

  chooseA() {
    console.log("hit LEFT (A)");
    this.loadCard();
  }

  chooseB() {
    console.log("hit RIGHT (B)");
    this.loadCard();
  }
}