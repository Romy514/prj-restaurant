import { Component, Input } from '@angular/core';
import { Plat } from '../../models/plat';

@Component({
  selector: 'app-plat-item',
  templateUrl: './plat-item.component.html',
  styleUrls: ['./plat-item.component.css']
})
export class PlatItemComponent {
  @Input() plat!: Plat;
}
