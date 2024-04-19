import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AUTH_KEY = "AUTH_RESPONSE"
  private authResponse: BehaviorSubject<AuthResponse | undefined> = new BehaviorSubject<AuthResponse | undefined>(undefined)
  private useLocal: boolean = false;

  get currentUser() {
    return this.authResponse.value?.user
  }

  get token() {
    return this.authResponse.value?.accessToken
  }

  get isLogged() {
    return !!this.authResponse.value
  }

  get remember() {
    return this.useLocal
  }

  set remember(value) {
    this.useLocal = value
  }


  constructor(private http: HttpClient, private router: Router) {
    const existingResponse = sessionStorage.getItem(this.AUTH_KEY) ?? localStorage.getItem(this.AUTH_KEY);
    if(existingResponse) this.authResponse.next(JSON.parse(existingResponse))

    this.authResponse.subscribe({
      next: value => {
        if(value) {
          (this.useLocal ? localStorage : sessionStorage).setItem(this.AUTH_KEY, JSON.stringify(value))
        }
        else {
          sessionStorage.clear()
          localStorage.clear()
        }
      }
    })
  }

  login(credentials: Credentials) {
    return this.http.post<AuthResponse>(`${environment.API_URL}/login`, credentials)
      // .pipe() permet d'effectuer des opérations intermédiaires avant souscription (voir doc RxJs)
      .pipe(
        // tap() permet de lire le retour de l'observable et l'utiliser sans modifier le comportement ultérieur
        tap(response => this.authResponse.next(response))
      )
  }

  register(user: User) {
    return this.http.post(`${environment.API_URL}/register`, user)
  }

  logout() {
    this.authResponse.next(undefined)
    this.router.navigate(['/auth/login'])
  }
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}
