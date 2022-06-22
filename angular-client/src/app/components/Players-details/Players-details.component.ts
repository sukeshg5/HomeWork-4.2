import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/Player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/Player.model';

@Component({
  selector: 'app-Player-details',
  templateUrl: './Players-details.component.html',
  styleUrls: ['./Players-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  currentPlayer: Player = {
    "_id": "",
    "name": "",
    "rushing yards": '',
    "touchdowns thrown": '',
    "sacks": '',
    "missed field goals": '',
    "catches made": ''
    };
  message = '';

  constructor(
    private PlayerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPlayer(this.route.snapshot.params.id);
  }

  getPlayer(id: string): void {
    this.PlayerService.get(id)
      .subscribe(
        data => {
          this.currentPlayer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {

    const data = {
      "name": this.currentPlayer.name,
      "rushing yards": this.currentPlayer["rushing yards"],
      "touchdowns thrown": this.currentPlayer["touchdowns thrown"],
      "sacks": this.currentPlayer.sacks,
      "missed field goals": this.currentPlayer["missed field goals"],
      "catches made": this.currentPlayer["catches made"]
      };

    this.message = '';

    this.PlayerService.update(this.currentPlayer._id, data)
      .subscribe(
        response => {
          // this.currentPlayer.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'This player was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  updatePlayer(): void {
    this.message = '';

    this.PlayerService.update(this.currentPlayer._id, this.currentPlayer)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This player was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletePlayer(): void {
    this.PlayerService.delete(this.currentPlayer._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/Players']);
        },
        error => {
          console.log(error);
        });
  }
}
