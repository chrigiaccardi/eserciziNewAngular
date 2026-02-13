import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgStyle, NgClass } from '@angular/common';
import { Child } from '../ciao/child/child';

@Component({
  selector: 'app-ciao',
    standalone: true,
  imports: [MatInputModule, FormsModule, MatFormFieldModule, NgClass, Child],
  templateUrl: './ciao.html',
  styleUrls: ['./ciao.css'],
})
export class Ciao implements OnInit, AfterViewInit{
  title = "Esercizi Angular";

  persone = [
    { nome: "luca", cognome: "Angaramo", eta: 30, isOnline: true, colore: "green" },
    {nome: "Giacomo", cognome: "Rossi", eta: 35, isOnline: false,colore: "yellow"},
    { nome: "eugenio", cognome: "Morando", eta: 34, isOnline: true,colore: "blue" },
    { nome: "Marta", cognome: "Caruso", eta: 34, isOnline: true,colore: "red" },
    { nome: "Rita", cognome: "Becchio", eta: 34, isOnline: true,colore: "black" },
    { nome: "Christian", cognome: "Giaccardi", eta: 34, isOnline: false,colore: "orange" },
  ]
  testo = "ciao";
  coloreOnline = 'green'
  coloreOffline = 'red'
  isVisible = true;
  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }
  onClick(event: Event) {
    this.title = "Ho cliccato sul bottone"
    console.log("ho cliccato")
  }
  @ViewChild("inputSaluti") valoreInput!: ElementRef<HTMLInputElement>

  ngOnInit(): void{
    console.log("ngOnInit")
    console.log(this.valoreInput)
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    console.log(this.valoreInput)

  }
  onClickInput() {
    console.log(this.valoreInput.nativeElement.value)
  }
}
