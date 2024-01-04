import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { SidebarComponent } from "./components/partials/sidebar/sidebar.component";
import { FooterComponent } from "./components/partials/footer/footer.component";
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';
import { LoginComponent } from './components/pages/login/login.component';
import { Admin } from './shared/models/admin';
import { AdminService } from './services/admin.service';
import { CreateComponent } from './components/pages/create/create.component';
import { EditComponent } from './components/pages/edit/edit.component';

const ADMIN_KEY = "Admin";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, 
      HeaderComponent, SidebarComponent, FooterComponent,
      HttpClientModule,AppModule,
      LoginComponent,CreateComponent,EditComponent]
})

export class AppComponent implements OnInit{
  title = 'admin';
  admin!: Admin;
  

  constructor(public router: Router,private adminService:AdminService){}

  ngOnInit() {
    // Navigate to the desired route when the component initializes
    if ( localStorage.getItem("Admin")?.length == 2) {
      
      this.router.navigate(['/login']);
      
    }
    console.log(localStorage.getItem("Admin")?.length);
    }
   
}
