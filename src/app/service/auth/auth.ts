import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.models';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient, private router: Router) { }
  APIKEY = 'key';
  signInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKEY}`;
  signUpUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKEY}`;
  isLoggedIn: boolean = true;
  user: User | null = null

  isAuthenticated():boolean {
    return this.isLoggedIn
  };

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate)
    this.isLoggedIn = true
  }

  signUp(email: string, password:string) {
    return this.http.post(this.signUpUrl,{email: email, password: password, returnSecureToken: true})
  };

  signIn(email: string, password:string) {
    return this.http.post(this.signInUrl,{email: email, password: password, returnSecureToken: true})
  };

  logout() {
    this.isLoggedIn = false;
    this.user = null;
    localStorage.removeItem('user')
    this.router.navigate(['/SignIn'])
  }
}
