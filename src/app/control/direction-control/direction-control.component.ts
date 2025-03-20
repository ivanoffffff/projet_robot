import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direction-control',
  templateUrl: './direction-control.component.html',
  standalone: true,
  styleUrls: ['./direction-control.component.scss']
})
export class DirectionControlComponent implements OnInit {

  ngOnInit(): void {
  }

  moveRobot(direction: string): void {
    console.log(`Déplacement: ${direction}`);
    // Logique pour déplacer le robot
  }

  stopMovement(): void {
    console.log('Arrêt du mouvement');
    // Logique pour arrêter le mouvement
  }
}
