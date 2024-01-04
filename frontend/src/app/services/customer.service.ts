import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Customer } from '../shared/models/customer';
import { ICustomerLogin } from '../shared/interfaces/ICustomerLogin';

import { CUSTOMER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


const CUSTOMER_KEY = "Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerSubject = new BehaviorSubject<Customer>(this.getCustomerFromLocalStorage());
  public customerObservable:Observable<Customer>;
  


  constructor(private http:HttpClient,private toastrService:ToastrService) { 
    this.customerObservable = this.customerSubject.asObservable();

  }


  getCustomerById(customerId:number):Observable<Customer>{
    return this.http.get<Customer>("http://localhost:3000/api//customerById/" + customerId)
  }


  login(customerLogin:ICustomerLogin):Observable<Customer>{
    return this.http.post<Customer>(CUSTOMER_LOGIN_URL, customerLogin).pipe(
      tap({
        next:(customer)=>{
          this.setCustomerToLocalStorage(customer);
          this.customerSubject.next(customer);
          this.toastrService.success(
            `Wellcome ${customer.customerName}`,
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
    this.customerSubject.next(new Customer());
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(new Customer()));
    window.location.reload();
  }

  private setCustomerToLocalStorage(customer:Customer){
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer))
  }
  private getCustomerFromLocalStorage():Customer{
    const customerJson = localStorage.getItem(CUSTOMER_KEY);
    if(customerJson)return JSON.parse(customerJson)as Customer;
    return new Customer();
  }
}
