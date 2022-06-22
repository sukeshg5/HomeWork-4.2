import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/Player.service';


@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  currentPlayer:Boolean = false;
  result:any=[]

  constructor(private PlayerService: PlayerService) { }

  ngOnInit(): void {
  }

  getPlayersMostPasses(): void {
    this.PlayerService.getPlayersMostPasses()
      .subscribe(
        data => {
          this.result = data;
          this.currentPlayer=true;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getPlayersMostRushingYards(): void {
    this.PlayerService.getPlayersMostRushingYards()
      .subscribe(
        data => {
          this.result = data;
          this.currentPlayer=true;

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getPlayersLeastRushingYards(): void {
    this.PlayerService.getPlayersLeastRushingYards()
      .subscribe(
        data => {
          this.result = data;
          this.currentPlayer=true;

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getPlayersSortedMostToFewest(): void {
    this.PlayerService.getPlayersSortedMostToFewest()
      .subscribe(
        data => {
          this.result = data;
          this.currentPlayer=true;

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getPlayersMostSacks(): void {
    this.PlayerService.getPlayersMostSacks()
      .subscribe(
        data => {
          this.result = data;
          this.currentPlayer=true;

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  

  
}
