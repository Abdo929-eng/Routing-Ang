import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , component:HomeComponent},
    {path:'about' , component:AboutComponent},
    {path:'portfolio' , component:PortfolioComponent},
    {path:'contact' , component:ContactComponent},
    {path:'**' , component:NotFoundComponent},
];
