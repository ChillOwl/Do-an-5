import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Admin } from '../shared/models/admin';
import { IAdminLogin } from '../shared/interfaces/IAdminLogin';

import { ADMIN_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


const ADMIN_KEY = "Admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminSubject = new BehaviorSubject<Admin>(this.getAdminFromLocalStorage());
  public adminObservable:Observable<Admin>;
  


  constructor(private http:HttpClient,private toastrService:ToastrService) { 
    this.adminObservable = this.adminSubject.asObservable();

  }


  login(adminLogin:IAdminLogin):Observable<Admin>{
    return this.http.post<Admin>(ADMIN_LOGIN_URL, adminLogin).pipe(
      tap({
        next:(admin)=>{
          this.setAdminToLocalStorage(admin);
          this.adminSubject.next(admin);
          this.toastrService.success(
            `Wellcome ${admin.adminName}`,
            'Login Successfull'
            
          )
        },
        error:(errorRespond)=>{
          this.toastrService.error(errorRespond.error,
            
            'Login Failed'
            
          )
        }
      })
    );
     
  }

  logout(){
    this.adminSubject.next(new Admin());
    localStorage.setItem(ADMIN_KEY, JSON.stringify(new Admin()));
    window.location.reload();
  }

  private setAdminToLocalStorage(admin:Admin){
    localStorage.setItem(ADMIN_KEY, JSON.stringify(admin))
  }
  private getAdminFromLocalStorage():Admin{
    let adminJson : any;
    if (typeof localStorage !== 'undefined') {
      // Access localStorage here
     adminJson = localStorage.getItem(ADMIN_KEY);
    }
    
    if(adminJson)return JSON.parse(adminJson)as Admin;
    return new Admin();
  }
}
