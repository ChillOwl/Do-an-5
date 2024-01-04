import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { ActivatedRoute,Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  showHeader = false;
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(private formBuilder: FormBuilder,
    private adminService:AdminService,
    private activatedRoute:ActivatedRoute,
    private router:Router) {
   
  }

  get fc() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid){
      
    return;
    } 
    

    this.adminService.login({account:this.fc.account.value,
    password:this.fc.password.value}).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);
      },
      (error) => {
      // Unsuccessful login
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials and try again.');
      }
    )
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      account: ['', Validators.required],
      password: ['', Validators.required],
    });
    
  }
  
}
