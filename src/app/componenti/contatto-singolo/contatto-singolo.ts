import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ArrayPersone } from '../../service/array-persone';
import { Firebase } from '../../service/firebase';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contatto-singolo',
  imports: [MatCardModule, MatButtonModule, MatInputModule,MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contatto-singolo.html',
  styleUrl: './contatto-singolo.css',
})
export class ContattoSingolo implements OnInit{
  id!: string;
  personaSingola: any;
   constructor(private route:ActivatedRoute, private arrayPersone: ArrayPersone, private firebase: Firebase) {
   }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!
      this.personaSingola = this.arrayPersone.persone.find(persona => persona.id === this.id)
    });
  }

  onDeletePersona() {
    this.firebase.deletePersona(this.firebase.urlPersone,this.id).subscribe(data => {
      console.log(data)
    })
  }
  mostraForm = false;
  onPatchPersona() {
    this.firebase.patchPersona(this.firebase.urlPersone, this.id, {})
    .subscribe(data => {console.log(data)})
  }
}
