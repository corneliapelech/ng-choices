import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { StatsService } from './services/stats.service';
import { DummyButtonsComponent } from './dummy-buttons/dummy-buttons.component';
import { GameOverComponent } from './game-over/game-over.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, AppRoutingModule ],
  declarations: [ AppComponent, StatsComponent, HomeComponent, GameComponent, DummyButtonsComponent, GameOverComponent, FooterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ StatsService ]
})
export class AppModule { }
