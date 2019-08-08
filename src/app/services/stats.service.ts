import { Component, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private money: number;
  private reputation: number;
  private conscience: number;
  private isGameOver: boolean;
  gameStateChange: Subject<boolean> = new Subject<boolean>(); 

  constructor() {
    this.isGameOver = false;
  }

  /* MECHANICS */
  updateGameState(gameState: boolean): void {
    this.isGameOver = gameState;
    this.gameStateChange.next(this.isGameOver);
  }

  /* STATS */
  // get
    public resolveMoney(): number {
      if (this.money <= 0) {
        return -1;
      } else if(this.money >= 10) {
        return 1;
      } else {
        return 0;
      }
    }
    resolveReputation(): number {
      if (this.reputation <= 0) {
        return -1;
      } else if(this.reputation >= 10) {
        return 1;
      } else {
        return 0;
      }
    }
    resolveConscience(): number {
      if (this.conscience <= 0) {
        return -1;
      } else if(this.conscience >= 10) {
        return 1;
      } else {
        return 0;
      }
    }
  // update
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