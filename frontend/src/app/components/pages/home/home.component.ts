import { Component, NgModule } from '@angular/core';
import { Game } from '../../../shared/models/game';
import { GameService } from '../../../services/game.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  games:Game[]=[];
  constructor(public router:Router,private gameService:GameService , activatedRoute:ActivatedRoute){

    let gameObservable:Observable<Game[]>
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        gameObservable = this.gameService.getAllGamesBySearchTerm(params.searchTerm);
        }
      else
      gameObservable = gameService.getAll();

      gameObservable.subscribe((serverGames)=> {
        this.games = serverGames;
      })
    })
    
  }
}
