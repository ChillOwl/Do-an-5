import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailComponent } from './components/pages/detail/detail.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';

export const routes: Routes = [
    {path:'search/:searchTerm', component:HomeComponent},
    {path:'tag/:tag', component:CategoriesComponent},
    {path:'', component:HomeComponent},
    {path:'detail/:id', component:DetailComponent},
    {path:'login', component:LoginComponent},
    {path:'profile', component:ProfileComponent}

];