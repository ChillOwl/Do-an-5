// Import necessary Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Import your components, services, and other modules
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { SearchComponent } from './components/partials/search/search.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailComponent } from './components/pages/detail/detail.component';


import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GameService } from './services/game.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/pages/login/login.component';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    // Declare your components here
    
  ],
  imports: [HomeComponent,LoginComponent,
    // Import other modules here
    HttpClientModule,
    
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
     timeOut:3000,
     positionClass:'toast-bottom-right',
     newestOnTop:false

    }),
   
  ],
  exports: [
    
    
],
  providers: [GameService,provideHttpClient(withFetch()),CustomerService,ToastrService
    // Add your services here
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [
    // Specify the root component
    
  ],
})
export class AppModule {}
