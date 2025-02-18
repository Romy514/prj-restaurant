import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuDetailComponent } from './menus/menu-detail/menu-detail.component';
import { PlatListComponent } from './plats/plat-list/plat-list.component';

const routes: Routes = [
  { path: '', component: AccueilComponent}, 
  { path: 'menus', component: MenuListComponent },
  { path: 'menus/:id', component: MenuDetailComponent }, 
  { path: 'menus/:id/plats', component: PlatListComponent },
  { path: 'plats', component: PlatListComponent },
  { path: 'plats/:id', component: PlatListComponent },
  { path: '**', redirectTo: 'accueil' } // Redirection vers l'accueil si la route n'existe pas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
