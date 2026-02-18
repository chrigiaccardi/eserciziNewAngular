import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Prova } from './prova/prova';
import { Ciao } from './ciao/ciao';
import { Contatti } from './contatti/contatti';
import { ContattoSingolo } from './contatto-singolo/contatto-singolo';


export const routes: Routes = [
    {path:'', component: Home},
    {path:'Prova', component: Prova},
    {path:'Ciao', component: Ciao},
    {path: 'Contatti', component: Contatti, children:[
        { path: ':id', component: ContattoSingolo }]
    },
];
