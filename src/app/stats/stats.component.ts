import { Component, OnInit } from '@angular/core';
import { Observer, Observable, of } from 'rxjs';

import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  
  constructor(public statsService: StatsService) {}

  ngOnInit() { }

}