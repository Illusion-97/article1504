import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // component: ListArticlesComponent <- Ceci effectue un chargement du composant dès le lancement de l'application
    loadComponent: () => import("./views/list-articles/list-articles.component").then(c => c.ListArticlesComponent) // Lazy Loading
  },
  {
    path: 'editor/:id',
    loadComponent: () => import("./views/editor/editor.component").then(c => c.EditorComponent),
    canActivate: [
      //AuthGuard,
      //authGuard
      //() => inject(AuthService).isLogged ? true : inject(Router).createUrlTree(['/auth/login'])
    ]},
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "prefix"
  }
];
