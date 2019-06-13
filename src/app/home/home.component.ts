import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LeaguesService } from '../leagues/leagues.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor( public leaguesServices: LeaguesService) { }

  ngOnInit() {
   
  }
}
