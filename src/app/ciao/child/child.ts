import { Component, Input, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [NgStyle],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() data: any;
  
  ngOnInit() {
   console.log(this.data)
  }
}
