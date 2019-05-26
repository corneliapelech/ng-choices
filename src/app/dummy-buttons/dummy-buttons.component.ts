import { Component, OnInit } from '@angular/core';

import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-dummy-buttons',
  templateUrl: './dummy-buttons.component.html',
  styleUrls: ['./dummy-buttons.component.css']
})
export class DummyButtonsComponent implements OnInit {

  constructor(private statsService: StatsService) { }

  ngOnInit() {
  }

  earnMoney(amount: number = 1): void {
    this.statsService.earnMoney(amount);
  }
  spendMoney(amount: number = 1): void {
    this.statsService.spendMoney(amount);
  }

  gainReputation(amount: number = 1): void {
    this.statsService.gainReputation(amount);
  }
  looseReputation(amount: number = 1): void {
    this.statsService.looseReputation(amount);
  }

  quack(): void {
    this.gainReputation(1);
    this.spendMoney(2);
  }
  boom(): void {
    this.looseReputation(3);
    this.earnMoney(2);
  }

}