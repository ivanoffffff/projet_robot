import { Routes } from '@angular/router';
import { HomeComponent } from './accueil/accueil.component';
import {ControlComponent} from "./control/control.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'control', component: ControlComponent},
];
