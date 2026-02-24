import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) { }
  url: string = 
  isLoggedIn: boolean = true
  isAuthenticated():boolean {
    return this.isLoggedIn
  }

  signUp(body: {}) {
    this.http.post(this.url,body)
  }
}
