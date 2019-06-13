import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LeaguesService } from '../leagues/leagues.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  users;
  sended:boolean = false;
  @ViewChild('mail') mail:ElementRef;
  isSubscribed:boolean = false;
  constructor( public leaguesServices: LeaguesService, private router: Router, public http : HttpClient) { }

  ngOnInit() {
    this.leaguesServices.getUsers().subscribe(data =>{
      this.users = data.users;
    });
  }

  mailSubmit(e){
    e.stopPropagation();
    this.http.post("./email.php", {'email': this.mail.nativeElement.value}).subscribe(res=>{
      this.sended = true;
    });
  }

}
