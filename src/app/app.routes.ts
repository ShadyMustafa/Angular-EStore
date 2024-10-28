import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ChartComponent } from './chart/chart.component';
import { AboutComponent } from './about/about.component';
import { StylesComponent } from './styles/styles.component';
import { OurStoreComponent } from './our-store/our-store.component';
import { ContactComponent } from './contact/contact.component';
import { OfferComponent } from './offer/offer.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'chart',component:ChartComponent},
    {path:'about',component:AboutComponent},
    {path:'styles',component:StylesComponent},
    {path:'our-store',component:OurStoreComponent},
    {path:'contact',component:ContactComponent},
    {path:'offer',component:OfferComponent},
    {path:'thank-you',component:ThankYouComponent},
    {path:'**' , component:PageNotFoundComponent}
];
