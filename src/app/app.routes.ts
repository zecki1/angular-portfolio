import { Routes } from '@angular/router';
import { CasesPage } from './pages/cases/cases';
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cases' },
  { path: 'cases', component: CasesPage, title: 'Cases — Zecki Portfolio' },
  { path: '**', redirectTo: 'cases' },
];
