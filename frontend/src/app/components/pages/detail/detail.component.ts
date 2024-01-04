import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../../shared/models/game';
import { GameService } from '../../../services/game.service';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../shared/models/customer';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  apiResponse: any;
  games!: Game[];
  customer!: Customer;
  constructor(activatedRoute:ActivatedRoute, 
    private gameService:GameService,
    private customerService:CustomerService){

      customerService.customerObservable.subscribe((newCustomer)=>{
        this.customer = newCustomer;
        }
      )
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      gameService.getGameById(params.id).subscribe(serverGame =>{
    this.games = serverGame;

    });
    })
  }
  isOwn():boolean{
   return this.customer.inventory.split(' ').includes(this.games[0].gameid.toString());
    
  }
  buyGame() {
    const requestData = {
       "cusId": this.customer.customerId,
      "gameid":this.games[0].gameid 
    };

    this.gameService.buyGame(requestData).subscribe(
      (response) => {
        this.apiResponse = response;
      },
      (error) => {
        console.error('Error calling API:', error);
      }
    );

    const storedObjectString = localStorage.getItem("Customer");
    let storedObject: any = storedObjectString ? JSON.parse(storedObjectString) : {};
    storedObject["inventory"] = storedObject["inventory"]+' '+ this.games[0].gameid ;
    localStorage.setItem("Customer", JSON.stringify(storedObject));
  }
}
