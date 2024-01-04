import { Injectable } from '@angular/core';
import { Game } from '../shared/models/game';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GAME_ID_URL, GAME_SEARCH_URL, GAME_URL } from '../shared/constants/urls';

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

  deleteGame(gameId:number):Observable<Game[]>{
    return this.http.get<Game[]>("http://localhost:3000/api/deleteGame/" + gameId)
  }
  
  createGame(formData: any): Observable<Game> {
    const url = "http://localhost:3000/api/createGame"
    return this.http.post<Game>(url, formData);
  }
  editGame(formData: any): Observable<Game> {   
    const url = "http://localhost:3000/api/editGame"
    return this.http.post<Game>(url, formData);
  }
}
