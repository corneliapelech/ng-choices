import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  money: number;
  reputation: number;
  conscience: number;
  isGameOver: boolean;

  constructor() {
    this.isGameOver = false;
  }

  /* MECHANICS */
  updateGameState(gameState: boolean): void {
    this.isGameOver = gameState;
  }

  /* STATS */
  updateMoney(amount: number): void {
    this.money = this.money + amount;
    if (this.money > 9 || this.money < 1) {
      this.updateGameState(true);
    }
  }
  updateReputation(amount: number): void {
    this.reputation = this.reputation + amount;
    if (this.reputation > 9 || this.reputation < 1) {
      this.updateGameState(true);
    }
  }
  updateConscience(amount: number): void {
    this.conscience = this.conscience + amount;
    if (this.conscience > 9 || this.conscience < 1) {
      this.updateGameState(true);
    }
  }
}