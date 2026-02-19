import { Routes } from '@angular/router';
import { Home } from './componenti/home/home';
import { Prova } from './componenti/prova/prova';
import { Ciao } from './componenti/ciao/ciao';
import { Contatti } from './componenti/contatti/contatti';
import { ContattoSingolo } from './componenti/contatto-singolo/contatto-singolo';


export const routes: Routes = [
    {path:'', component: Home},
    {path:'Prova', component: Prova},
    {path:'Ciao', component: Ciao},
    {path: 'Contatti', component: Contatti, children:[
        { path: ':id', component: ContattoSingolo }]
    },
];