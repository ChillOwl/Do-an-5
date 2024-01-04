import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../shared/models/customer';
import { Game } from '../../../shared/models/game';
import { GameService } from '../../../services/game.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Init } from 'v8';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  customer!: Customer;
  games:Game[]=[];

  constructor(private customerService:CustomerService,
    private gameService:GameService){

    customerService.customerObservable.subscribe((newCustomer)=>{
      this.customer = newCustomer;
      }
    )
    let gameObservable:Observable<Game[]>
    gameObservable = gameService.getAll();
    gameObservable.subscribe((serverGames)=> {
      this.games = serverGames;})
  }
  ngOnInit(): void {
    // this.customerService.getCustomerById(this.customer.customerId).subscribe(serverGame =>{
    //   this.customer = serverGame;})
    //   localStorage.setItem("Customer", JSON.stringify(this.customer));
      
  }

  logout(){
    this.customerService.logout();

  }

}
