import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueDetailsComponent } from './leagues/details/details.component';

const routes: Routes = [
  { path: 'leagues', component: LeaguesComponent},
  { path: 'leagues/:id', component: LeagueDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
