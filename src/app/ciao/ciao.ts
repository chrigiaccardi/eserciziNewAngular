import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-ciao',
    standalone: true,
  imports: [MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './ciao.html',
  styleUrls: ['./ciao.css'],
})
export class Ciao {
  title = "Esercizi Angular";
  onInput(event: Event) {
    this.title = (<HTMLInputElement>event.target).value
  }
  onClick(event: Event) {
    this.title = "Ho cliccato sul bottone"
    console.log("ho cliccato")
  }
}
