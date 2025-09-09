import { Routes } from '@angular/router';
import { Curriculum } from './curriculum/curriculum';
import { Form } from './form/form';

export const routes: Routes = [
  { path: '', component: Curriculum },
  { path: 'contacto', component: Form },
  { path: '**', redirectTo: '' },
];
