import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Prova } from './prova/prova';
import { Ciao } from './ciao/ciao';
import { Contatti } from './contatti/contatti';


export const routes: Routes = [
    {path:'', component: Home},
    {path:'Prova', component: Prova},
    {path:'Ciao', component: Ciao},
    {path:'Contatti', component: Contatti},
    {path:'Contatti/:id', component: Contatti},
];
