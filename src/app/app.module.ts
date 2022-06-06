import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUsersListComponent } from './components/pages/github-users-list/github-users-list.component';
import { NaviComponent } from './common/navi/navi.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { UserSearchComponent } from './components/pages/user-search/user-search.component';
import { WeatherComponent } from './components/pages/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUsersListComponent,
    NaviComponent,
    NotFoundComponent,
    UserSearchComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
