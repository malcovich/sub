import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LeaguesService } from './leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  matches: any;
  leagues;
  @ViewChild('mail') mail:ElementRef;
  mails= ['test'];
  isSubscribed:boolean = false;
  constructor( public leaguesServices: LeaguesService) { }

  ngOnInit() {
    this.getLeagues();
    if(sessionStorage.getItem('isSubscribed') === 'isSubscribed'){
      this.isSubscribed = true;
    }
  }

  getLeagues() {
    this.leaguesServices.getLeagues().subscribe(data => {
      this.leagues = data.leagues;
    });
  }

  mailSubmit(e){
    e.stopPropagation();
    if(this.mails.indexOf(this.mail.nativeElement.value) > -1){
      this.isSubscribed = true;
      sessionStorage.setItem('isSubscribed', 'isSubscribed');
    }
    console.log(this.mail.nativeElement.value)
  }

}
