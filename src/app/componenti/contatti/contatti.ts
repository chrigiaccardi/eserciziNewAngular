import { Component, OnInit } from '@angular/core';
import { ServizioProva } from '../../service/servizio-prova';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatCard } from "@angular/material/card";


@Component({
  selector: 'app-contatti',
  imports: [RouterOutlet, MatDividerModule, MatListModule, RouterLink, MatCard],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css',
})
export class Contatti implements OnInit{
  persone: any;

  constructor(private servizioProva: ServizioProva) { }
  
  ngOnInit(): void{
  this.persone = this.servizioProva.getPersone();
  }
}
