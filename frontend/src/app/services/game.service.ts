import { Injectable } from '@angular/core';
import { Game } from '../shared/models/game';
import { list_games } from '../../data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GAME_ID_URL, GAME_SEARCH_URL, GAME_TAG_URL, GAME_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Game[]>{
    return this.http.get<Game[]>(GAME_URL);
  }

  getAllGamesBySearchTerm(serchTerm:string){
    return this.http.get<Game[]>(GAME_SEARCH_URL + serchTerm)
  }

  getGameById(gameId:number):Observable<Game[]>{
    return this.http.get<Game[]>(GAME_ID_URL + gameId)
  }

  getGameByTag(gameId:number):Observable<Game[]>{
    return this.http.get<Game[]>(GAME_TAG_URL + gameId)
  }
  buyGame(data: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/buyGame`, data);
  }
}
