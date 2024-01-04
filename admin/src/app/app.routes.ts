import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { GamesComponent } from './components/pages/games/games.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CreateComponent } from './components/pages/create/create.component';
import { EditComponent } from './components/pages/edit/edit.component';


export const routes: Routes = [

    {path:'games', component:GamesComponent},
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'create', component:CreateComponent},
    {path:'edit/:id', component:EditComponent},



];
