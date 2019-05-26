import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  money: number;
  reputation: number;
  isGameOver: boolean;

  constructor() {
    this.isGameOver = false;
  }

  /* MECHANICS */
  updateGameState(gameState: boolean): void {
    this.isGameOver = gameState;
  }

  /* MONEY */
  earnMoney(amount: number): void {
    this.money = this.money + amount;
    if (this.money > 9) {
      console.log("DEAD - you're too rich");
      this.updateGameState(true);
    }
  }
  spendMoney(amount: number): void {
    this.money = this.money - amount;
    if (this.money < 1) {
      console.log("DEAD - you're broke");
      this.updateGameState(true);
    }
  }

  /* REPUTATION */
  gainReputation(amount: number): void {
    this.reputation = this.reputation + amount;
    if (this.reputation > 9) {
      console.log("DEAD - you're adored");
      this.updateGameState(true);
    }
  }
  looseReputation(amount: number): void {
    this.reputation = this.reputation - amount;
    if (this.reputation < 1) {
      console.log("DEAD - you're hated");
      this.updateGameState(true);
    }
  }
}