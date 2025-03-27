// direction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  private apiUrl = 'http://192.168.1.39:5000/direction';

  constructor(private http: HttpClient) { }

  sendDirection(direction: string) {
    return this.http.post(this.apiUrl, { direction });
  }
}
