import { Routes } from '@angular/router';
import cases from './pages/cases';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cases' },
  { path: 'cases', component: cases, title: 'Cases — Zecki Portfolio' },
  { path: '**', redirectTo: 'cases' },
];
