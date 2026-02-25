import { Component, OnInit } from '@angular/core';
import { ServizioProva } from './service/servizio-prova';
import { RouterOutlet, RouterLinkWithHref} from '@angular/router';
import { Auth } from './service/auth/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  
})
export class App implements OnInit{
  constructor(private servizioProva: ServizioProva, private authService: Auth) { }
  
  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!)
      this.authService.createUser(user.email, user.id,user._token, user._expirationDate)
      console.log(this.authService.user)
    }
  }
  title = 'esercizi-angular';
  onLogout() {
   this.authService.logout()
 }
}
