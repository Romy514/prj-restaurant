import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenusComponent } from './menus/menus.component';
import { MenuDetailComponent } from './menus/menu-detail/menu-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuListComponent } from './menus/menu-list/menu-list.component';
import { MenuServiceComponent } from './services/menu-service/menu-service.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenusComponent,
    MenuDetailComponent,
    NavbarComponent,
    ServicesComponent,
    MenuItemComponent,
    MenuListComponent,
    MenuServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
