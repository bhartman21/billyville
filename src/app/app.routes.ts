import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)
  },
  {
    path: 'professional',
    loadComponent: () => import('./pages/professional/professional').then(m => m.ProfessionalComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent)
  },
  {
    path: 'community',
    loadComponent: () => import('./pages/service/service').then(m => m.ServiceComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
