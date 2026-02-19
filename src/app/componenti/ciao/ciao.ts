import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgStyle, NgClass } from '@angular/common';
import { Child } from '../ciao/child/child';
import { ServizioProva } from '../../service/servizio-prova';

@Component({
  selector: 'app-ciao',
    standalone: true,
  imports: [MatInputModule, FormsModule, MatFormFieldModule, NgClass, Child],
  templateUrl: './ciao.html',
  styleUrls: ['./ciao.css'],
})
export class Ciao implements OnInit, AfterViewInit{
  constructor(public servizioProva: ServizioProva) {}
  title = "Esercizi Angular";
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
    console.log(this.servizioProva.persone)
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
    console.log(this.valoreInput)

  }
  onClickInput() {
    console.log(this.valoreInput.nativeElement.value)
  }
}
