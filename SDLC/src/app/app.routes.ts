import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/shared/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
       path: '',
       redirectTo: "/home",
       pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
