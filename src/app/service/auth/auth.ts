import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) { }
  APIKEY= 'AIzaSyCAU2ZI9nXGzmeL92SayCqg-AsfebQPqSA'
  signInUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKEY}`
  signUpUrl: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKEY}`
  isLoggedIn: boolean = true
  isAuthenticated():boolean {
    return this.isLoggedIn
  }

  signUp(email: string, password:string) {
    return this.http.post(this.signUpUrl,{email: email, password: password, returnSecureToken: true})
  }
  signIn(email: string, password:string) {
    return this.http.post(this.signInUrl,{email: email, password: password, returnSecureToken: true})
  }
}
