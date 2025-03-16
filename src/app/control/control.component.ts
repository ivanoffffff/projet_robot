import { Component } from '@angular/core';
import {RobotStatusComponent} from "./robot-status/robot-status.component";

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [
    RobotStatusComponent
  ],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent {

}
