import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { GameComponent, QuitGame } from './game/game.component';
import { StatsService } from './services/stats.service';
import { GameOverComponent } from './game-over/game-over.component';
import { FooterComponent } from './footer/footer.component';
import { ActionCardComponent } from './action-card/action-card.component';
import { ActionCardService } from './services/action-card.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, AppRoutingModule ],
  declarations: [ AppComponent, StatsComponent, HomeComponent, GameComponent, QuitGame, GameOverComponent, FooterComponent, ActionCardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ StatsService, ActionCardService ],
  entryComponents: [QuitGame]
})
export class AppModule { }
