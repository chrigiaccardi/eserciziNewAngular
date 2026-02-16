import { Component,OnInit } from '@angular/core';
import { ServizioProva } from '../service/servizio-prova';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contatti',
  imports: [RouterLink],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css',
})
export class Contatti {
  persone: any;
  persona: any;
  isProfile: boolean = false;
  constructor(private servizioProva: ServizioProva, private route:ActivatedRoute) {
  }
  ngOnInit(): void{
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true
       this.persona = this.servizioProva.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!));
    } else {
      this.isProfile = false
      this.persone = this.servizioProva.getPersone();
    }
  }
}
