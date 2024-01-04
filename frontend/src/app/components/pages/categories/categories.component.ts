import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Game } from '../../../shared/models/game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  games!: Game[];
  cate!: any;

  constructor(activatedRoute:ActivatedRoute, gameService:GameService){
    activatedRoute.params.subscribe((params)=>{
      if(params.tag)
      gameService.getGameByTag(params.tag).subscribe(serverGame =>{
    this.games = serverGame;
    this.cate = params.tag;
    });
    })
  }
}
