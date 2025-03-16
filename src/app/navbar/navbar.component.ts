import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input({ required: true }) title! : string
}
