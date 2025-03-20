import { Component, OnInit } from '@angular/core';
import {NgClass} from "@angular/common";

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
  speed: number = 50;
  maxSpeed: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  updateSpeed(event: any): void {
    this.speed = event.target.value;
    console.log(`Vitesse ajustée à: ${this.speed}%`);
    // Logique pour ajuster la vitesse du robot
  }
}
