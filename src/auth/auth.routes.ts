import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import("./views/login/login.component").then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import("./views/login/login.component").then(c => c.LoginComponent)
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'prefix'
  },
];
