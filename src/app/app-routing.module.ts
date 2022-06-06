import { WeatherComponent } from './components/pages/weather/weather.component';
import { UserSearchComponent } from './components/pages/user-search/user-search.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { GithubUsersListComponent } from './components/pages/github-users-list/github-users-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: "full", component:GithubUsersListComponent},
  {path: "search", component:UserSearchComponent},
  {path: "weather", component:WeatherComponent},
  {path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
