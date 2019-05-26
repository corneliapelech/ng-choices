import { Component, OnInit, OnDestroy } from '@angular/core';

import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  constructor(public statsService: StatsService) {
    
  }

  ngOnInit() {
    this.statsService.money = 5;
    this.statsService.reputation = 5;
    
  }

  ngOnDestroy() {
    this.statsService.updateGameState(false);
  }

}