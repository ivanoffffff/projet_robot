// direction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  private apiUrl = 'http://localhost:5000/direction';

  constructor(private http: HttpClient) { }

  sendDirection(direction: string) {
    return this.http.post(this.apiUrl, { direction });
  }
}
