import { Component, OnInit } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-robot-status',
  templateUrl: './robot-status.component.html',
  standalone: true,
  imports: [NgClass],
  styleUrls: ['./robot-status.component.scss']
})
export class RobotStatusComponent implements OnInit {
  isConnected: boolean = true;
  robotState: string = 'En service';
  position: string = 'Hall d\'entrée';
  batteryLevel: number = 85;

  constructor() { }

  ngOnInit(): void {
  }

  toggleConnection(): void {
    this.isConnected = !this.isConnected;
    this.robotState = this.isConnected ? 'En service' : 'Hors service';
  }
}
