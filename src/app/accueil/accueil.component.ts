import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FeaturesComponent } from '../features/features.component';
import { RobotStatusComponent } from '../robot-status/robot-status.component';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, RobotStatusComponent, NavbarComponent]
})
export class HomeComponent {
}
