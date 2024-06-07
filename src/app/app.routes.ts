import { Routes } from '@angular/router';
import { HomeComponent } from './modules/weather/page/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: 'weather', pathMatch: 'full'},
  {path: 'weather', component: HomeComponent}
];
