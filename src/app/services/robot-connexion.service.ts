import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class robotConnexionService {

  private apiUrl = 'http://localhost:5000/connexion'; // Assurez-vous que cette variable existe dans votre environnement
  private connectionStateSubject = new BehaviorSubject<boolean>(true);
  connectionState$: Observable<boolean> = this.connectionStateSubject.asObservable();

  constructor(private http: HttpClient) { }

  setConnectionState(isConnected: boolean): Observable<any> {
    this.connectionStateSubject.next(isConnected);

    // Envoyer l'état de connexion à l'API
    const connectionEndpoint = `${this.apiUrl}`;
    const payload = { connected: isConnected };

    return this.http.post(connectionEndpoint, payload).pipe(
      tap(() => console.log(`État de connexion envoyé: ${isConnected ? 'connecté' : 'déconnecté'}`)),
      catchError(error => {
        console.error('Erreur lors de l\'envoi de l\'état de connexion', error);
        throw error;
      })
    );
  }
}
