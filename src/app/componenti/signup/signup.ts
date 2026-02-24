import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Auth } from '../../service/auth/auth';

@Component({
  selector: 'app-signup',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private authService: Auth){}

  onSubmit(form: NgForm) {
    const nome = form.value.nome
    const cognome = form.value.cognome
    const email = form.value.email
    const password = form.value.password
    console.log(nome, cognome, email, password)
    this.authService.signUp(email, password).subscribe(data => {console.log(data)})
    form.reset()
  }

}
