import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { GameService } from '../../../services/game.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  createForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '/games';
  constructor(private formBuilder:FormBuilder,
      private gameService:GameService,
      private activatedRoute:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
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
    return this.createForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.createForm.invalid)return;
    
      this.gameService.createGame({
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
      (error) => {
        // Unsuccessful login
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
        }
      
      )
      alert('success')
    
    
  }

}
