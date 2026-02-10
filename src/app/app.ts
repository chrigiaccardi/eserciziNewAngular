import { Component } from '@angular/core';
import { Prova } from "./prova/prova";
import { Ciao } from './ciao/ciao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Prova, Ciao],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  
})
export class App {
  title = 'esercizi-angular';
}
