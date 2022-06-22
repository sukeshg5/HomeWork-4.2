import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './components/add-Players/add-Players.component';
import { PlayerDetailsComponent } from './components/Players-details/Players-details.component';
import { PlayersListComponent } from './components/Players-list/Players-list.component';
import { QueriesComponent } from './components/queries/queries.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    PlayerDetailsComponent,
    PlayersListComponent,
    QueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
