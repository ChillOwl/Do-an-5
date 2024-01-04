import { Component } from '@angular/core';
import { Game } from '../../../shared/models/game';
import { GameService } from '../../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../partials/header/header.component";
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
    selector: 'app-games',
    standalone: true,
    templateUrl: './games.component.html',
    styleUrl: './games.component.css',
    imports: [CommonModule, HeaderComponent]
})
export class GamesComponent {
  games: Game[]=[];
  returnUrl = '/games';
  constructor(private http:HttpClient, private gameService:GameService,
     activatedRoute:ActivatedRoute,
     private location: Location,private router:Router){
    let gameObservable:Observable<Game[]>;
    gameService.getAll().subscribe(serverGame =>{
      this.games = serverGame;
    })
  }
  
  delete(gameId:number){
    this.gameService.deleteGame(gameId).subscribe(serverGame =>{
      this.games = serverGame;})
     
  }
  confirmDelete(gameId: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this game?');
  
    if (confirmed) {
      // Call the delete method if the user confirms
      this.delete(gameId);
    }
  }
}
