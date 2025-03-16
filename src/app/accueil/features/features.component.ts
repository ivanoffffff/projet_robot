import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import {RouterLink} from "@angular/router";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  standalone: true,
  imports: [CommonModule, FeatureCardComponent,RouterLink],
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: '🎮',
      title: 'Contrôle intuitif',
      description: 'Interface simple et réactive pour piloter votre robot avec précision.'
    },
    {
      icon: '📊',
      title: 'Analyse de données',
      description: 'Visualisez et analysez les données collectées par votre robot.'
    },
    {
      icon: '🔄',
      title: 'Temps réel',
      description: 'Recevez les informations de votre robot instantanément sans délai.'
    }
  ];
}
