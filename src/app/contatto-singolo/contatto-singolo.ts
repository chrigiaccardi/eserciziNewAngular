import { Component } from '@angular/core';

@Component({
  selector: 'app-contatto-singolo',
  imports: [],
  templateUrl: './contatto-singolo.html',
  styleUrl: './contatto-singolo.css',
})
export class ContattoSingolo {
  persona = { nome: "Christian", cognome: "Giaccardi", eta: 34, isOnline: false, colore: "orange" };
}
