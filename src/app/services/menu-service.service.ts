import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  readonly menuAPI = environment.apiURL+"/menus"

  constructor(
    private http:HttpClient
  ) {}

  getMenus() : Observable<Menu[]>{
    return this.http.get<Menu[]>(this.menuAPI)
  }

  getMenu(id:number) : Observable<Menu>{
    return this.http.get<Menu>(this.menuAPI+"/"+id)
  }

  addMenu(nouveauMenu:Menu) :  Observable<Menu> {
    return this.http.post<Menu>(this.menuAPI, nouveauMenu)
  }

  updateMenu(id: number, menu: Menu) {
    return this.http.put<Menu>(this.menuAPI+"/"+menu.id, menu)
  }

    deleteMenu(id: number): Observable<void> {
      return this.http.delete<void>(`${this.menuAPI}/${id}`);
    }
}
