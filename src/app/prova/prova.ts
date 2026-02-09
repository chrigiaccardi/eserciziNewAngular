import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatSlideToggleModule],
  templateUrl: './prova.html',
styleUrls: ['./prova.css']
})
export class Prova implements OnInit, AfterContentChecked, AfterContentInit,AfterViewInit, DoCheck, OnDestroy, AfterViewChecked{
  constructor() {
  console.log("Costruttore")
  }
  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked")
  }
  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked")

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")

  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")

  }
  ngDoCheck(): void {
     console.log("ngDoCheck")

  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }

}
