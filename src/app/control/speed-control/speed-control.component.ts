import {Component, inject, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {DirectionService} from "../../services/direction.service";
import {SpeedService} from "../../services/speed.service";

@Component({
  selector: 'app-speed-control',
  templateUrl: './speed-control.component.html',
  standalone: true,
  imports: [
    NgClass
  ],
  styleUrls: ['./speed-control.component.scss']
})
export class SpeedControlComponent implements OnInit {
  private readonly speedService = inject(SpeedService);
  speed: number = 50;
  maxSpeed: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  updateSpeed(event: any) {
    this.speed = event.target.value;
    this.speedService.sendSpeed(this.speed).subscribe(
      response => console.log('Direction envoyée:', response),
      error => console.error('Erreur:', error)
    );
    console.log(`Vitesse ajustée à: ${this.speed}%`);
    // Logique pour ajuster la vitesse du robot
  }
}
