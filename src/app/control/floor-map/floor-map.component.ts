import { Component, OnInit } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-floor-map',
  standalone : true,
  imports : [NgClass],
  templateUrl: './floor-map.component.html',
  styleUrls: ['./floor-map.component.scss']
})
export class FloorMapComponent implements OnInit {
  isMapLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Simulation du chargement du plan
    setTimeout(() => {
      this.isMapLoaded = true;
    }, 1000);
  }
}
