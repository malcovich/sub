import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  matches: any;
  @ViewChild('mail') mail:ElementRef;
  mails= ['test'];
  isSubscribed:boolean = false;
  constructor() { }

  ngOnInit() {
    if(sessionStorage.getItem('isSubscribed') === 'isSubscribed'){
      this.isSubscribed = true;
    }
    this.matches = [{
      'title': 'New York Red Bulls - Atlanta United',
      'home': '57%',
      'draw': '25%',
      'away': '18%',
      'over': '72%',
      'under': '28%'
      },
      {
        'title': 'Philadelphia Union - Seattle Sounders',
        'home': '40%',
        'draw': '28%',
        'away': '32%',
        'over': '44%',
        'under': '56%'
        },
        {
          'title': 'New York Red Bulls - Atlanta United',
          'home': '57%',
          'draw': '25%',
          'away': '18%',
          'over': '72%',
          'under': '28%'
          },
          {
            'title': 'New York Red Bulls - Atlanta United',
            'home': '57%',
            'draw': '25%',
            'away': '18%',
            'over': '72%',
            'under': '28%'
            },
            {
              'title': 'New York Red Bulls - Atlanta United',
              'home': '57%',
              'draw': '25%',
              'away': '18%',
              'over': '72%',
              'under': '28%'
              }
    ]
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
