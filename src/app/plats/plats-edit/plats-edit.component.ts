import { Component, OnInit } from '@angular/core';
import { Plat } from '../../models/plat';
import { PlatServiceService } from '../../services/plat-service.service';
import { MenuServiceService } from '../../services/menu-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plats-edit',
  templateUrl: './plats-edit.component.html',
  styleUrls: ['./plats-edit.component.css']
})
export class PlatsEditComponent implements OnInit {
  plat: Plat = new Plat();
  menus: any[] = [];
  isEditMode: boolean = false;
  menuId!: number;

  constructor(
    private platService: PlatServiceService,
    private menuService: MenuServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.menuId = Number(params.get('menuId'));
      const platId = Number(params.get('id'));

      if (!isNaN(this.menuId)) {
        this.plat.menuId = this.menuId;
      }

      if (!isNaN(platId) && platId > 0) {
        this.isEditMode = true;
        this.getPlat(platId);
      } else {
        this.isEditMode = false;
      }
    });

    this.menuService.getMenus().subscribe(data => this.menus = data);
  }

  getPlat(id: number): void {
    this.platService.getPlat(id).subscribe(
      (data: Plat) => this.plat = data,
      error => console.error('Erreur lors du chargement du plat', error)
    );
  }

  /**
   * Ajoute ou modifie un plat selon le mode actuel
   */
  savePlat(): void {
    if (!this.plat.menuId) {
      alert('Veuillez sélectionner un menu.');
      return;
    }

    if (this.isEditMode) {
      // Mise à jour d'un plat
      this.platService.updatePlat(this.plat.id, this.plat).subscribe(
        () => {
          alert('Plat modifié avec succès!');
          this.router.navigate([`/menus/${this.menuId}/plats`]);
        },
        error => console.error('Erreur lors de la modification du plat', error)
      );
    } else {
      // Ajout d'un plat
      this.platService.addPlat(this.menuId, this.plat).subscribe(
        () => {
          alert('Plat ajouté avec succès!');
          this.router.navigate([`/menus/${this.menuId}/plats`]);
        },
        error => console.error("Erreur lors de l'ajout du plat", error)
      );
    }
  }
}
