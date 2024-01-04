import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { GameService } from '../../../services/game.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../../shared/models/game';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class  EditComponent implements OnInit {
  games!: Game[];



  editForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '/games';
  constructor(private formBuilder:FormBuilder,
      private gameService:GameService,
      private activatedRoute:ActivatedRoute,
    private router:Router){

      activatedRoute.params.subscribe((params)=>{
        if(params.id)
        gameService.getGameById(params.id).subscribe(serverGame =>{
          this.games = serverGame;
          });
      })
    }

  ngOnInit(): void {
    this. editForm = this.formBuilder.group({
      gameid:[''],
      gamename:['',Validators.required],
      price:['',Validators.required],
      des:['',Validators.required],
      dev:['',Validators.required],
      logo:[''],
      banner:[''],
      ss1:[''],
      ss2:[''],
      ss3:['']
    })
  }

  get fc(){
    return this. editForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this. editForm.invalid)return;
    
      this.gameService. editGame({
        gameid:this.games[0].gameid,
        gamename:this.fc.gamename.value,
        price:this.fc.price.value,
        des:this.fc.des.value,
        dev:this.fc.dev.value,
        logo:this.fc.logo.value,
        banner:this.fc.banner.value,
        ss1:this.fc.ss1.value,
        ss2:this.fc.ss2.value,
        ss3:this.fc.ss3.value,
      }).subscribe(()=>{
        this.router.navigateByUrl(this.returnUrl);
      },
      
      )
      alert('success')
    
    
  }

}
