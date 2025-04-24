import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '1',
    loadComponent: () =>
      import('./components/lazy-one/lazy-one.component').then(
        (m) => m.LazyOneComponent,
      ),
  },
  {
    path: '2',
    loadComponent: () =>
      import('./components/lazy-two/lazy-two.component').then(
        (m) => m.LazyTwoComponent,
      ),
  },
  { path: '**', redirectTo: 'home' },
];
