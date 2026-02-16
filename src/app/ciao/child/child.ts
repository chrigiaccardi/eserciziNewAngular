import { Component, Input, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { UpperCasePipe, DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [NgStyle, DatePipe, DecimalPipe, CurrencyPipe],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  numero = 81.2;
  titolo: string = 'corso-angular';
  oggi = Date.now();

  @Input() data: any;
  
  ngOnInit() {
   console.log(this.data)
  }
}
