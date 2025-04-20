import {Component, inject, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {robotConnexionService} from "../../services/robot-connexion.service";

@Component({
  selector: 'app-robot-status',
  templateUrl: './robot-status.component.html',
  standalone: true,
  imports: [NgClass, NgIf],
  styleUrls: ['./robot-status.component.scss']
})
export class RobotStatusComponent implements OnInit {
  isConnected: boolean = true;
  robotState: string = 'En service';
  position: string = 'Hall d\'entrée';
  batteryLevel: number = 85;
  isSending: boolean = false;
  private readonly ConnexionService = inject(robotConnexionService);

  constructor() { }

  ngOnInit(): void {
  }

  // toggleConnection(): void {
  //   this.isConnected = !this.isConnected;
  //   this.robotState = this.isConnected ? 'En service' : 'Hors service';
  // }
  toggleConnection(): void {
    this.isSending = true;
    const newConnectionState = !this.isConnected;

    this.ConnexionService.setConnectionState(newConnectionState).subscribe({
      next: () => {
        this.isConnected = newConnectionState;
        this.robotState = this.isConnected ? 'En service' : 'Hors service';
        this.isSending = false;
      },
      error: () => {
        // En cas d'erreur, on ne change pas l'état
        this.isSending = false;
        // Optionnel : ajouter un message d'erreur pour l'utilisateur
      }
    });
  }

}
