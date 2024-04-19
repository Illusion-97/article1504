import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    // RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true})
    provideRouter(routes),
    /*
    * {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    * */
    provideHttpClient(withInterceptors([]))
  ]
};
