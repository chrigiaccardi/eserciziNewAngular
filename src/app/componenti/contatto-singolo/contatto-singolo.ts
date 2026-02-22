import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ArrayPersone } from '../../service/array-persone';

@Component({
  selector: 'app-contatto-singolo',
  imports: [MatCardModule],
  templateUrl: './contatto-singolo.html',
  styleUrl: './contatto-singolo.css',
})
export class ContattoSingolo implements OnInit{
  id!: string;
  personaSingola: any;
   constructor(private route:ActivatedRoute, private arrayPersone: ArrayPersone) {
   }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!
      this.personaSingola = this.arrayPersone.persone.find(persona => persona.id === this.id)
      console.log(this.personaSingola)
    })
  }
}
