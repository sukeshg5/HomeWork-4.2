import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/Player.model';
import { PlayerService } from 'src/app/services/Player.service';

@Component({
  selector: 'app-add-Player',
  templateUrl: './add-Players.component.html',
  styleUrls: ['./add-Players.component.css']
})
export class AddPlayerComponent implements OnInit {
  Player: Player = {
    "_id": "",
    "name": "",
    "rushing yards": '',
    "touchdowns thrown": '',
    "sacks": '',
    "missed field goals": '',
    "catches made": ''
    };
  submitted = false;

  constructor(private PlayerService: PlayerService) { }

  ngOnInit(): void {
  }

  savePlayer(): void {
    const data = {
      "name": this.Player.name,
      "rushing yards": this.Player["rushing yards"],
      "touchdowns thrown": this.Player["touchdowns thrown"],
      "sacks": this.Player.sacks,
      "missed field goals": this.Player["missed field goals"],
      "catches made": this.Player["catches made"]
      };

    this.PlayerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPlayer(): void {
    this.submitted = false;
    this.Player = {
      "_id": "",
      "name": "",
      "rushing yards": '',
      "touchdowns thrown": '',
      "sacks": '',
      "missed field goals": '',
      "catches made": ''
      };
  }

}
