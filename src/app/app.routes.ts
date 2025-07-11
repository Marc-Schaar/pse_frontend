import { Routes } from '@angular/router';
import { MainLibaryComponent } from './components/main-libary/main-libary.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pse-elements',
    pathMatch: 'full',
  },
  { path: 'pse-elements', component: MainLibaryComponent },
];
