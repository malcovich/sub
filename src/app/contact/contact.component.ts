import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LeaguesService } from '../leagues/leagues.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  sended:boolean = false;
  @ViewChild('mail') mail:ElementRef;
  @ViewChild('message') message:ElementRef;
  constructor( public leaguesServices: LeaguesService, public http : HttpClient) { }

  ngOnInit() {
  }

  mailSubmit(e){
    e.stopPropagation();
    this.http.post("./contact.php", JSON.stringify({'email': this.mail.nativeElement.value, 'message': this.message.nativeElement.value})).subscribe(res=>{
      this.sended = true;
    },error=>{
      console.log("e", error)
    });
  }

}
