import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProva {
  persone = [
    { nome: "luca", cognome: "Angaramo", eta: 30, isOnline: true, colore: "green" },
    { nome: "Giacomo", cognome: "Rossi", eta: 35, isOnline: false, colore: "yellow" },
    { nome: "eugenio", cognome: "Morando", eta: 34, isOnline: true, colore: "blue" },
    { nome: "Marta", cognome: "Caruso", eta: 34, isOnline: true, colore: "red" },
    { nome: "Rita", cognome: "Becchio", eta: 34, isOnline: true, colore: "black" },
    { nome: "Christian", cognome: "Giaccardi", eta: 34, isOnline: false, colore: "orange" },
  ];

  getPersona(index: number) {
    return this.persone[index]
  }
  getPersone() {
    return this.persone
  }
}
