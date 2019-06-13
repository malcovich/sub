import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LeaguesService } from '../leagues/leagues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  users;
  @ViewChild('mail') mail:ElementRef;
  isSubscribed:boolean = false;
  constructor( public leaguesServices: LeaguesService, private router: Router) { }

  ngOnInit() {
    this.leaguesServices.getUsers().subscribe(data =>{
      this.users = data.users;
    });
  }

  mailSubmit(e){
    e.stopPropagation();
    this.users.forEach(user => {
      if(user.email == this.mail.nativeElement.value){
        this.isSubscribed = true;
        sessionStorage.setItem('isSubscribed', 'isSubscribed');
        this.router.navigate(['/leagues']);
      }
    });
  }

}
