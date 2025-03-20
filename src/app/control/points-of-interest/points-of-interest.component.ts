import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-points-of-interest',
  templateUrl: './points-of-interest.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./points-of-interest.component.scss']
})
export class PointsOfInterestComponent implements OnInit {
  points: string[] = ['Exposition A', 'Exposition B', 'Salle conférence', 'Cafétéria'];
  newPoint: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  goToStation(): void {
    console.log('Retour à la station');
    // Logique pour le retour à la station
  }

  goToPoint(point: string): void {
    console.log(`Navigation vers: ${point}`);
    // Logique pour naviguer vers un point
  }

  addNewPoint(): void {
    if (this.newPoint.trim()) {
      this.points.push(this.newPoint.trim());
      this.newPoint = '';
    }
  }
}
