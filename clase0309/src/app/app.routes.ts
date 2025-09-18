import { Routes } from '@angular/router';
import { Curriculum } from './components/curriculum/curriculum';
import { Form } from './components/form/form';
import { authGuard } from './misc/auth-guard';

export const routes: Routes = [
  { path: '', 
    component: Curriculum },
  { path: 'contacto', 
    component: Form,
    canActivate: [authGuard]},
  { path: '**', 
    redirectTo: '' }, 
];
