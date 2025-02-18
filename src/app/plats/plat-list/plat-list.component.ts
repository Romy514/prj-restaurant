import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatServiceService } from '../../services/plat-service.service';
import { Plat } from '../../models/plat';

@Component({
  selector: 'app-plat-list',
  templateUrl: './plat-list.component.html',
  styleUrls: ['./plat-list.component.css']
})
export class PlatListComponent implements OnInit {

  plats: Plat[] = [];   // Liste des plats
  menuId: number | null = null;  // ID du menu (peut être null)

  constructor(
    private platService: PlatServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du menu depuis l'URL, il peut être null
    this.menuId = +this.route.snapshot.paramMap.get('id')!;  // 'null' si aucun paramètre id n'est trouvé

    // Charger les plats associés à ce menu si un ID est présent
    this.getPlats();
  }

  getPlats(): void {
    // Si un menuId est présent, charger les plats associés à ce menu
    if (this.menuId) {
      this.platService.getPlatsByMenu(this.menuId).subscribe(
        (data: Plat[]) => {
          this.plats = data;
        },
        error => {
          console.error('Erreur lors du chargement des plats', error);
        }
      );
    } else {
      // Sinon, charger tous les plats
      this.platService.getPlats().subscribe(
        (data: Plat[]) => {
          this.plats = data;
        },
        error => {
          console.error('Erreur lors du chargement des plats', error);
        }
      );
    }
  }
}
