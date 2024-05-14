import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/shared/page-not-found/page-not-found.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';

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
        path: 'service-details',
        component: ServiceDetailsComponent
    },

    
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
