import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
  constructor(private http: HttpClient) { } 

  urlPersone: string = 'https://esercizi-angular-8b2d3-default-rtdb.europe-west1.firebasedatabase.app/persone';
  urlPersoneJson: string = this.urlPersone + '.json'

  insertPersona(url: string, body:{}) {
    return this.http.post(url,body)
  }

  getPersone(url: string) {
    return this.http.get(url)
  }

  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`)
  }
  patchPersona() {
    
  }
}
