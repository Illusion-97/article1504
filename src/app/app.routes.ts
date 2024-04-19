import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'articles',
    loadChildren: () => import("../articles/articles.route").then(r => r.routes)
  },
  {
    path: 'auth',
    loadChildren: () => import("../auth/auth.routes").then(r => r.routes)
  },
  {
    path: '**',
    redirectTo: '/articles',
    pathMatch: "full"
  },

];
