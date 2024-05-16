import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/shared/page-not-found/page-not-found.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { HospitalManagementAppComponent } from './pages/hospital-management-app/hospital-management-app.component';
import { FoodDeliveryAppComponent } from './pages/food-delivery-app/food-delivery-app.component';
import { HotelManagementAppComponent } from './pages/hotel-management-app/hotel-management-app.component';
import { BillingSoftwareAppComponent } from './pages/billing-software-app/billing-software-app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TeamComponent } from './pages/team/team.component';

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
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'price',
        component: PricingComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'service-details',
        component: ServiceDetailsComponent
    },
    {
        path: 'hospital-management-app',
        component: HospitalManagementAppComponent
    },
    {
        path: 'food-delivery-app',
        component: FoodDeliveryAppComponent
    },
    {
        path: 'hotel-management-app',
        component: HotelManagementAppComponent
    },
    {
        path: 'billing-software-app',
        component: BillingSoftwareAppComponent
    },
    
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
