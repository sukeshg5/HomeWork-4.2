import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from './components/Players-list/Players-list.component';
import { PlayerDetailsComponent } from './components/Players-details/Players-details.component';
import { AddPlayerComponent } from './components/add-Players/add-Players.component';
import { QueriesComponent } from './components/queries/queries.component';


const routes: Routes = [
  { path: '', redirectTo: 'Players', pathMatch: 'full' },
  { path: 'Players', component: PlayersListComponent },
  { path: 'Players/:id', component: PlayerDetailsComponent },
  { path: 'add', component: AddPlayerComponent },
  { path: 'queries', component: QueriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
