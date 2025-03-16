import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-robot-status',
  templateUrl: './robot-status.component.html',
  styleUrls: ['./robot-status.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RobotStatusComponent {
  isConnected: boolean = false;

  get statusMessage(): string {
    return this.isConnected
      ? 'Votre robot est connecté. Vous pouvez maintenant le contrôler et recevoir des données.'
      : 'Connectez votre robot pour commencer à recevoir des données et le contrôler à distance.';
  }

  toggleConnection(): void {
    this.isConnected = !this.isConnected;
    // Ici vous pourriez appeler un service pour établir une connexion réelle
  }
}
