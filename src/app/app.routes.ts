import { Routes } from '@angular/router';
import { Home } from './componenti/home/home';
import { Prova } from './componenti/prova/prova';
import { Ciao } from './componenti/ciao/ciao';
import { Contatti } from './componenti/contatti/contatti';
import { ContattoSingolo } from './componenti/contatto-singolo/contatto-singolo';
import { Notfound404 } from './componenti/notfound404/notfound404';
import { authGuard } from './service/auth/auth-guard';
import { Signup } from './componenti/signup/signup';



export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/Homepage' },
    { path: 'Homepage', component: Home },
    { path: 'SignUp', component: Signup },
    { path: 'Prova', component: Prova },
    { path: 'Ciao', component: Ciao },
    {path: 'Contatti', component: Contatti, canActivate:[authGuard], children: [
        { path: ':id', component: ContattoSingolo }]
    },
    { path: '404error', component: Notfound404 },
    {path:'**', redirectTo:'/404error'},
];