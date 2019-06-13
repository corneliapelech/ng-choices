import { Component, OnInit } from '@angular/core';

import { ActionCardService, IActionCard, IConclusion } from '../services/action-card.service';
import { StatsService } from '../services/stats.service'

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent implements OnInit {
  card: IActionCard;
  outcome: string;

  constructor(private cardService: ActionCardService, private statsService: StatsService) { }

  ngOnInit() {
    this.loadCard();
    this.outcome = "Intro text?";
  }

  loadCard() {
    this.card = this.cardService.getCard();
  }

  chooseA() {
    this.resolveChoice(this.card.conclusionA);
  }

  chooseB() {
    this.resolveChoice(this.card.conclusionB);
  }

  private resolveChoice(conclusion: IConclusion) {
    this.statsService.updateMoney(parseInt(conclusion.money));
    this.statsService.updateReputation(parseInt(conclusion.reputation));
    this.statsService.updateConscience(parseInt(conclusion.conscience));
    this.outcome = conclusion.outcome;
    this.loadCard();
  }
}