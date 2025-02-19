import { Component } from '@angular/core';
import { Plat } from '../../models/plat';
import { PlatServiceService } from '../../services/plat-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plats-edit',
  templateUrl: './plats-edit.component.html',
  styleUrl: './plats-edit.component.css'
})
export class PlatsEditComponent {
    plat: Plat;  // Menu à afficher ou modifier
    platId: number = 0; // L'ID du menu dans l'URL
  
    constructor(
      private route: ActivatedRoute, 
      private menuService: PlatServiceService,  // Service pour interagir avec l'API
      private router: Router  // Pour la redirection après modification ou suppression
    ) { 
      this.plat = new Plat(0,0,"",0)
    }
  
    ngOnInit(): void {
      // Récupérer l'ID du menu depuis l'URL
      this.platId = +this.route.snapshot.paramMap.get('id')!; 
      
      // Si un ID est trouvé, appeler la méthode pour récupérer les détails du menu
      if (this.platId) {
        this.getPlatDetails(this.platId);
      }
    }

    // Récupérer les détails d'un menu à partir de l'ID
    getPlatDetails(id: number): void {
      this.menuService.getPlat(id).subscribe((data: Plat) => {
        this.plat = data;  // Assigner les données du menu à la variable `menu`
      });
    }

    // Modifier un menu
    updatePlat(): void {
      if (this.plat) {
        this.menuService.updatePlat(this.plat.id, this.plat).subscribe(() => {
          alert('Plat modifié avec succès!');
          this.router.navigate(['/plats']);  // Rediriger vers la liste des menus après modification
        });
      }
    }
  
}
