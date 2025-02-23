import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plat } from '../models/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatServiceService {

  readonly apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  /**
   * Récupère les plats pour un menu
   * @param menuId identifiant du menu sélectionné
   * @returns tous les plats appartenant au menu choisi
   */
  getPlatsByMenu(menuId: number): Observable<Plat[]> {
    return this.http.get<Plat[]>(`${this.apiURL}/menus/${menuId}/plats`);
  }

  /**
   * Récupère tous les plats
   * @returns tous les plats
   */
  getPlats(): Observable<Plat[]> {
    return this.http.get<Plat[]>(`${this.apiURL}/plats`);
  }

  /**
   * Récupère un plat
   * @param id identifiant du plat recherché
   * @returns le plat 
   */
  getPlat(id: number): Observable<Plat> {
    return this.http.get<Plat>(`${this.apiURL}/plats/${id}`);
  }

  /**
   * Ajoute un plat aux données
   * @param menuId identifiant de son menu associé
   * @param plat le plat à ajouter
   * @returns le plat ajouté
   */
  addPlat(menuId: number, plat: Plat): Observable<Plat> {
    return this.http.post<Plat>(`${this.apiURL}/plats`, {
      ...plat,
      menuId: menuId
    });
  }

  /**
   * Modifie un plat
   * @param id identifiant du plat à modifier
   * @param plat le plat modifié
   * @returns le plat modifié
   */
  updatePlat(id: number, plat: Plat): Observable<Plat> {
    return this.http.put<Plat>(`${this.apiURL}/plats/${id}`, {
      ...plat,
      menuId: plat.menuId 
    });
  }

  /**
   * Supprime un plat des données
   * @param id identifiant du plat à supprimer
   * @returns void
   */
  deletePlat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/plats/${id}`);
  }
}
