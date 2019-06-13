import { Component, OnInit } from '@angular/core';

import { ActionCardService, IActionCard } from '../services/action-card.service';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {
  card: IActionCard;

  constructor(private cardService: ActionCardService) { }

  ngOnInit() {
    this.loadCard();
  }

  loadCard() {
    this.card = this.cardService.getCard();
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