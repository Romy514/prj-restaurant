import { Component, Input } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  @Input()
  public menu:Menu = new Menu()
}
