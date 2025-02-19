import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuDetailComponent } from './menus/menu-detail/menu-detail.component';
import { PlatListComponent } from './plats/plat-list/plat-list.component';
import { PlatsEditComponent } from './plats/plats-edit/plats-edit.component';
import { MenuEditComponent } from './menus/menu-edit/menu-edit.component';

const routes: Routes = [
  { path: '', component: AccueilComponent}, 
  { path: 'menus', component: MenuListComponent },
  { path: 'menus/:id', component: MenuDetailComponent }, 
  { path: 'menus/edit/:id', component: MenuEditComponent },
  { path: 'menus/edit', component: MenuEditComponent },
  { path: 'menus/:id/plats', component: PlatListComponent },
  { path: 'plats', component: PlatListComponent },
  { path: 'plats/edit/:id', component: PlatsEditComponent },
  { path: 'plats/edit/', component: PlatsEditComponent },
  { path: '**', redirectTo: 'accueil' } // Redirection vers l'accueil si la route n'existe pas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
