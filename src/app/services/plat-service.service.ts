import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plat } from '../models/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatServiceService {

  readonly apiURL = environment.apiURL; // Point de base pour l'API

  constructor(private http: HttpClient) {}

  // Récupérer les plats d'un menu spécifique
  getPlatsByMenu(menuId: number): Observable<Plat[]> {
    return this.http.get<Plat[]>(`${this.apiURL}/menus/${menuId}/plats`);
  }

    // Récupérer les plats d'un menu spécifique
    getPlats(): Observable<Plat[]> {
      return this.http.get<Plat[]>(`${this.apiURL}/plats`);
    }

  // Récupérer un plat spécifique
  getPlat(id: number): Observable<Plat> {
    return this.http.get<Plat>(`${this.apiURL}/plats/${id}`);
  }

  // Ajouter un plat à un menu spécifique
  addPlat(menuId: number, plat: Plat): Observable<Plat> {
    return this.http.post<Plat>(`${this.apiURL}/plats`, {
      ...plat,
      menuId: menuId // Associe le plat au menu via menuId
    });
  }

  // Mettre à jour un plat
  updatePlat(id: number, plat: Plat): Observable<Plat> {
    return this.http.put<Plat>(`${this.apiURL}/plats/${id}`, plat);
  }

  // Supprimer un plat
  deletePlat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/plats/${id}`);
  }
}
