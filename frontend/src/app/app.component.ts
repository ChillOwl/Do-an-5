import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/partials/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';
import { DetailComponent } from './components/pages/detail/detail.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FooterComponent } from "./components/partials/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, HttpClientModule, AppModule, DetailComponent, LoginComponent, FooterComponent]
})
export class AppComponent {
  title = 'frontend';
showHeader = true;
constructor(public router: Router){}
}
