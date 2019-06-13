import { CanActivateChild, Router, CanLoad, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LeaguesService } from '../../leagues/leagues.service';

@Injectable()
export class NavigateAccessGuard implements CanActivateChild, CanLoad, CanActivate {
  isSubscribed: boolean = false;
  constructor(
    private leaguesService: LeaguesService,
    private router: Router
  ) { }

  canActivateChild() {
    if(sessionStorage.getItem('isSubscribed') === 'isSubscribed'){
      this.isSubscribed = true;
      return true;
    } else {
      this.router.navigate(['/request']);
      return false;
    }
  }

  canLoad() {
    return this.canActivateChild();
  }

  canActivate(){
    return this.canActivateChild();
  }
}
