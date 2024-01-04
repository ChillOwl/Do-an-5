import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../shared/models/customer';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent,CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  customer!: Customer;

  constructor(customerService:CustomerService){
    customerService.customerObservable.subscribe((newCustomer)=>{
      this.customer = newCustomer;
    }
    
    )

  }
}
