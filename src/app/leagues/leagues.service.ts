import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable()
export class LeaguesService{
  constructor(public http : HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json");
  }

  getLeagues(): Observable<any> {
    return this.http.get("./assets/leagues.json");
  }
}