import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpeedService {
  private apiUrl = 'http://192.168.1.39:5000/speed';

  constructor(private http: HttpClient) { }

  sendSpeed(speed: number) {
    return this.http.post(this.apiUrl, { speed });
  }
}
