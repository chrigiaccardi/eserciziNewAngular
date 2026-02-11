import {Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatSlideToggleModule],
  templateUrl: './prova.html',
  styleUrls: ['./prova.css']
})
export class Prova implements OnInit {
  
  isDisabled = true
  immagine = ""
  immagine1 = "https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg"
  immagine2 = "https://www.skyweaver.net/images/media/wallpapers/wallpaper2.jpg"

  cani = [
    { nome: "roger", razza: "golden retriver", descrizione: "Bellissimo cane biondissimo" },
    { nome: "socio", razza: "non sono un cane", descrizione: "mannaia" },
    { nome: "cane", razza: "mallinois", descrizione: "Bello e vivace" }
  ]

  constructor() {
    console.log("Costruttore")
  }
 
  ngOnInit(): void {
    console.log("ngOnInit");
  }
}