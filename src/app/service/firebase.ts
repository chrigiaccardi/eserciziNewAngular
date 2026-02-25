import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth/auth';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  constructor(private http: HttpClient, private authService: Auth) { } 

  urlPersone: string = 'https://esercizi-angular-8b2d3-default-rtdb.europe-west1.firebasedatabase.app/persone';
  urlPersoneJson: string = this.urlPersone + '.json'

  insertPersona(url: string, body:{}) {
    return this.http.post(url,body)
  }

  getPersone(url: string) {
    return this.http.get(`${url}?auth=${this.authService.user?.token}`)
  }

  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`)
  }
  patchPersona(url: string, id: string, body:{}) {
    return this.http.patch(`${url}/${id}.json`, body)
  }
}
