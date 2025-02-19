import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailComponent } from './menus/menu-detail/menu-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuServiceService } from './services/menu-service.service';
import { PlatItemComponent } from './plats/plat-item/plat-item.component';
import { PlatListComponent } from './plats/plat-list/plat-list.component';
import { MenuEditComponent } from './menus/menu-edit/menu-edit.component';
import { PlatsEditComponent } from './plats/plats-edit/plats-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenusComponent,
    MenuDetailComponent,
    NavbarComponent,
    MenuItemComponent,
    MenuListComponent,
    PlatItemComponent,
    PlatListComponent,
    MenuEditComponent,
    PlatsEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MenuServiceService, PlatItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
