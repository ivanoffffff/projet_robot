import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {HeroComponent} from "./hero/hero.component";
import {FeaturesComponent} from "./features/features.component";
import {FeatureCardComponent} from "./features/feature-card/feature-card.component";
import {RobotStatusComponent} from "./robot-status/robot-status.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HeroComponent, FeaturesComponent, FeatureCardComponent, RobotStatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AI-Migos';
}
