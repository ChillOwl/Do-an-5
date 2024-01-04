// Import necessary Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Import your components, services, and other modules
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';

import { HomeComponent } from './components/pages/home/home.component';



import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GameService } from './services/game.service';
import { AdminService } from './services/admin.service';
import { LoginComponent } from './components/pages/login/login.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './components/pages/create/create.component';
import { EditComponent } from './components/pages/edit/edit.component';

@NgModule({
  declarations: [
    // Declare your components here
    
  ],
  imports: [
    // Import other modules here
    HttpClientModule,RouterModule,
    LoginComponent,CreateComponent,EditComponent,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
 
     }),ReactiveFormsModule
  ],
  exports: [
    
    
],
  providers: [AdminService,GameService,provideHttpClient(withFetch()),ToastrService
    // Add your services here
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [
    // Specify the root component
    
  ],
})
export class AppModule {}
