import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/Player.model';
import { PlayerService } from 'src/app/services/Player.service';

@Component({
  selector: 'app-Players-list',
  templateUrl: './Players-list.component.html',
  styleUrls: ['./Players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  Players?: Player[];
  currentPlayer?: Player;
  currentIndex = -1;
  title = '';

  constructor(private PlayerService: PlayerService) { }

  ngOnInit(): void {
    this.retrievePlayers();
  }

  retrievePlayers(): void {
    this.PlayerService.getAll()
      .subscribe(
        data => {
          this.Players = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePlayers();
    this.currentPlayer = undefined;
    this.currentIndex = -1;
  }

  setActivePlayer(Player: Player, index: number): void {
    this.currentPlayer = Player;
    this.currentIndex = index;
  }

  // removeAllPlayers(): void {
  //   this.PlayerService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.refreshList();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // searchTitle(): void {
  //   this.currentPlayer = undefined;
  //   this.currentIndex = -1;

  //   this.PlayerService.findByTitle(this.title)
  //     .subscribe(
  //       data => {
  //         this.Players = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

}
