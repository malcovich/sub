import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueDetailsComponent } from './leagues/details/details.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LeaguesService } from './leagues/leagues.service';
import { HttpClientModule } from '@angular/common/http'; 
import { NavigateAccessGuard } from './core/guards/navigate-access.guard';
import { RequestComponent } from './request/request.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    LeaguesComponent,
    LeagueDetailsComponent,
    SubscribeComponent,
    RequestComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LeaguesService, NavigateAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
