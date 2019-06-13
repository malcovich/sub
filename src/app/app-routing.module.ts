import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueDetailsComponent } from './leagues/details/details.component';
import { NavigateAccessGuard } from './core/guards/navigate-access.guard';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RequestComponent } from './request/request.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'leagues', component: LeaguesComponent, canActivate: [NavigateAccessGuard]},
  { path: 'leagues/:id', component: LeagueDetailsComponent, canActivate: [NavigateAccessGuard]},
  { path: 'subscribe', component: SubscribeComponent},
  { path: 'request', component: RequestComponent},
  { path: '**', redirectTo: '/'  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
