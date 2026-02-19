import { Component, OnInit } from '@angular/core';
import { ServizioProva } from './service/servizio-prova';
import { RouterOutlet, RouterLinkWithHref} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
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
