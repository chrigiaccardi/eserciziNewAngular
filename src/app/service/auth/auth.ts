import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isLoggedIn: boolean = true
  isAuthenticated():boolean {
    return this.isLoggedIn
  }
}
