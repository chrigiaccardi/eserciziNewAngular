import { Component, OnInit } from '@angular/core';
import { Prova } from "./prova/prova";
import { Ciao } from './ciao/ciao';
import { ServizioProva } from './service/servizio-prova';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Prova, Ciao],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  
})
export class App implements OnInit{
  constructor(private servizioProva: ServizioProva){}
  ngOnInit(): void {
  console.log("Qui siamo in app per il nome", this.servizioProva.persone[3].nome)
  }
  title = 'esercizi-angular';
 
}
