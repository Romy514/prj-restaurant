import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  public menus : Menu[] = []

  readonly host = "http://localhost:3000"
  readonly menuAPI = this.host+"/menus"

  constructor(
    private http:HttpClient
  ) {
    this.http.get<Menu[]>(this.menuAPI).subscribe({
      next : menus=>{
        this.menus.length=0;
        this.menus.push(...menus)
      },
      error: err=>console.log("ERREUR LOAD MENU", err)
    })
   }

  getMenus() {
    return this.menus
  }

  getMenu(id:number) : Menu | undefined {
    return this.menus.find( m => m.id == id)
  }

  addMenu(nouveauMenu:Menu) : Menu {
    this.http.post<Menu>(this.menuAPI, nouveauMenu).subscribe({
      next : menu=> 
    })
  }
}
