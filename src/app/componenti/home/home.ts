import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  formreactive!: FormGroup
  
  ngOnInit(): void {
    this.formreactive = new FormGroup({
      nome: new FormControl(null,Validators.required),
      cognome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
      })
  }
  

  onSubmit(form: NgForm) {
    console.log(form)
  }
  onSubmitR() {
    console.log(this.formreactive)
  }
}
