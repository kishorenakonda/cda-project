import { MainComponent } from './main/main.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
