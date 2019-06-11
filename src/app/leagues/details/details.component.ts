import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaguesService } from '../leagues.service';

@Component({
  selector: 'app-league-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class LeagueDetailsComponent implements OnInit {
  leagueId: boolean;
  matches; //need type
  league;
  constructor(    
    public route: ActivatedRoute,
    public leaguesServices: LeaguesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.leagueId = data['id'];
      this.getLeagueInfo()
      this.getMatches();
    });
  }

  getLeagueInfo() {
    this.leaguesServices.getLeagues().subscribe(data => {
      this.league = data.leagues.filter(item => item.id == this.leagueId)[0];
    });
  }

  getMatches() {
    this.leaguesServices.getJSON().subscribe(data => {
      this.matches = data.matches.filter(item => item.leagueId == this.leagueId);
    });
  }
}
