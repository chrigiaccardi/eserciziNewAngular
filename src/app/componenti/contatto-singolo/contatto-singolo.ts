import { Component, OnInit } from '@angular/core';
import { ServizioProva } from '../../service/servizio-prova';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-contatto-singolo',
  imports: [MatCardModule],
  templateUrl: './contatto-singolo.html',
  styleUrl: './contatto-singolo.css',
})
export class ContattoSingolo implements OnInit{
  id!: number;
  personaSingola: any;
   constructor(private servizioProva: ServizioProva, private route:ActivatedRoute) {
   }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!
      this.personaSingola = this.servizioProva.getPersona(this.id)
    })
  }
}
