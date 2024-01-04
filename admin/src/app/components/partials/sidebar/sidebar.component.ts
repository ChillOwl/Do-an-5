import { Component } from '@angular/core';
import { Admin } from '../../../shared/models/admin';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
admin!: Admin;
constructor(private  adminService: AdminService){
   adminService. adminObservable.subscribe((newAdmin)=>{
    this.admin = newAdmin;
  }
  
  )

}

}
