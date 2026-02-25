import { Component } from '@angular/core';
import { Auth } from '../../service/auth/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  constructor(private authService: Auth) { }
  
    onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email, password)
      this.authService.signIn(email, password).subscribe((data: any) => {
        console.log(data)

        const expirationDate = new Date(new Date().getTime() + data.expiresIn *1000)
        this.authService.createUser(data.email, data.localId, data.idToken, expirationDate)
        localStorage.setItem('user', JSON.stringify(this.authService.user))
        
        console.log(this.authService.user)
      
     });
    form.reset()
  }
}
