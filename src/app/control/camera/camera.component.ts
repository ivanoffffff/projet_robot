import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit, OnDestroy {
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;

  private mediaStream: MediaStream | null = null;
  isCameraActive = false;
  errorMessage: string | null = null;

  constructor() {}

  ngOnInit() {
    // Vous pouvez démarrer la caméra automatiquement si souhaité
    // this.startCamera();
  }

  async startCamera() {
    try {
      console.log('Tentative d\'accès à la caméra');

      // Lister les périphériques disponibles
      const devices = await navigator.mediaDevices.enumerateDevices();
      console.log('Périphériques disponibles:', devices);

      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });

      console.log('Flux média obtenu');

      if (this.videoElement) {
        this.videoElement.nativeElement.srcObject = this.mediaStream;

        // Écouteur pour vérifier quand la vidéo commence
        this.videoElement.nativeElement.onloadedmetadata = () => {
          console.log('Métadonnées chargées');
          this.videoElement.nativeElement.play();
        };

        this.isCameraActive = true;
        this.errorMessage = null;
      }
    } catch (error) {
      console.error('Erreur détaillée:', error);
      this.errorMessage = `Impossible d\'accéder à la caméra: ${error instanceof Error ? error.message : 'Erreur inconnue'}`;
      this.isCameraActive = false;
    }
  }

  stopCamera() {
    if (this.mediaStream) {
      // Arrêter tous les tracks de la caméra
      this.mediaStream.getTracks().forEach(track => track.stop());

      // Réinitialiser le flux vidéo
      if (this.videoElement) {
        this.videoElement.nativeElement.srcObject = null;
      }

      this.mediaStream = null;
      this.isCameraActive = false;
    }
  }

  ngOnDestroy() {
    // S'assurer que la caméra est arrêtée quand le composant est détruit
    this.stopCamera();
  }
}
