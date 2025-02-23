import { Component, Input } from '@angular/core';
import { PlatServiceService } from '../../services/plat-service.service';
import { Plat } from '../../models/plat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plat-item',
  templateUrl: './plat-item.component.html',
  styleUrls: ['./plat-item.component.css']
})
export class PlatItemComponent {

  @Input() plat!: Plat;

  constructor(
    private platService: PlatServiceService, 
    private router: Router 
  ) {}

  deletePlat(id: number, menuId: number): void {
    this.platService.deletePlat(id).subscribe(
      () => {
        alert(`Plat avec l'ID ${id} supprimé`);
        this.router.navigate([`/menus/${menuId}`]);
      },
      error => {
        console.error('Erreur lors de la suppression du plat', error);
      }
    );
  }
}
