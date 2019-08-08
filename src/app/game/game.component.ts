import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription }   from 'rxjs';

import { StatsService } from '../services/stats.service';

@Component({
  selector: 'quit-game',
  template: `
    <div class="modal-body">
      If you quit the game, your progress will be lost.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-info" (click)="activeModal.close()">Continue to play</button>
      <button type="button" class="btn btn-secondary" routerLink="/home"(click)="activeModal.close()">Back to main screen</button>
    </div>
  `,
  styleUrls: ['./quit-game.component.scss']
})
export class QuitGame {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})
export class GameComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(public statsService: StatsService, private modalService: NgbModal) {
    this.subscription = statsService.gameStateChange.subscribe((value) => { 
      if (value === false) {
        this.setStats();
      }
    });
  }

  ngOnInit() {
    this.setStats();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.statsService.updateGameState(false);
  }

  setStats() {
    this.statsService.money = 5;
    this.statsService.reputation = 5;
    this.statsService.conscience = 5;
  }

  quit() {
    this.modalService.open(QuitGame, {centered: true, windowClass: 'dark-modal', size: 'sm'});
  }

}