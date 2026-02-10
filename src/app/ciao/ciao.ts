import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-ciao',
    standalone: true,
  imports: [MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './ciao.html',
  styleUrls: ['./ciao.css'],
})
export class Ciao {
  title = "Esercizi Angular";

  persone = [
    { nome: "luca", cognome: "Angaramo", eta: 30, isOnline: true },
    {nome: "Giacomo", cognome: "Rossi", eta: 35, isOnline: false},
    { nome: "eugenio", cognome: "Morando", eta: 34, isOnline: true },
    { nome: "Marta", cognome: "Caruso", eta: 34, isOnline: false },
    { nome: "Rita", cognome: "Becchio", eta: 34, isOnline: true },
    { nome: "Christian", cognome: "Giaccardi", eta: 34, isOnline: false },
  ]
    

  isVisible = true;
  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }
  onClick(event: Event) {
    this.title = "Ho cliccato sul bottone"
    console.log("ho cliccato")
  }
}
