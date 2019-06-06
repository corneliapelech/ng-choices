import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {
  title: string;
  cardContent: string;
  imgSrc: string;
  altText: string;

  constructor() { }

  ngOnInit() {
    this.loadCard();
  }

  loadCard(cardId?: number) {
    this.title = "dummy card title";
    this.cardContent = "Insert card text here that contains a situation-setup and poses a question that can be answered.";
    this.imgSrc = "../assets/images/cards/dummy.jpg";
    this.altText = "alt text goes here";
  }

  left() {
    console.log("hit LEFT");
    this.loadCard();
  }

  right() {
    console.log("hit RIGHT");
    this.loadCard();
  }
}