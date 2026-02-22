import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatCard } from "@angular/material/card";
import { Firebase } from '../../service/firebase';
import { ArrayPersone } from '../../service/array-persone';


@Component({
  selector: 'app-contatti',
  imports: [RouterOutlet, MatDividerModule, MatListModule, RouterLink, MatCard],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css',
})
export class Contatti implements OnInit{
  persone: any;
  
  constructor(private firebase: Firebase, private arrayPersone: ArrayPersone) { }
  
  ngOnInit(): void{
    this.firebase.getPersone(this.firebase.urlPersoneJson).subscribe((data: any) => {
      this.persone = Object.keys(data).map(key => { return { id: key, ...data[key]} });
      this.arrayPersone.persone = this.persone;
    })
  }
}
