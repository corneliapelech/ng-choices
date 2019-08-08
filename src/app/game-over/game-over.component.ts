import { Component, OnInit } from '@angular/core';

import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {
  money: number;
  reputation: number;
  conscience: number;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.money = this.statsService.resolveMoney();
    this.reputation = this.statsService.resolveReputation();
    this.conscience = this.statsService.resolveConscience();
  }

  restart() {
    this.statsService.updateGameState(false);
    // TODO:  reset stats!
  }

}