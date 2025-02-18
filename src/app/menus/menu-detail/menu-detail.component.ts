import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuServiceService } from '../../services/menu-service.service';  // Ton service qui gère les requêtes HTTP
import { Menu } from '../../models/menu'; // Le modèle représentant le menu

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {
  
  menu: Menu | undefined;  // Menu à afficher ou modifier
  menuId: number = 0; // L'ID du menu dans l'URL

  constructor(
    private route: ActivatedRoute, 
    private menuService: MenuServiceService,  // Service pour interagir avec l'API
    private router: Router  // Pour la redirection après modification ou suppression
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID du menu depuis l'URL
    this.menuId = +this.route.snapshot.paramMap.get('id')!; 
    
    // Si un ID est trouvé, appeler la méthode pour récupérer les détails du menu
    if (this.menuId) {
      this.getMenuDetails(this.menuId);
    }
  }

  // Récupérer les détails d'un menu à partir de l'ID
  getMenuDetails(id: number): void {
    this.menuService.getMenu(id).subscribe((data: Menu) => {
      this.menu = data;  // Assigner les données du menu à la variable `menu`
    });
  }

  // Modifier un menu
  updateMenu(): void {
    if (this.menu) {
      this.menuService.updateMenu(this.menu.id, this.menu).subscribe(() => {
        alert('Menu modifié avec succès!');
        this.router.navigate(['/menus']);  // Rediriger vers la liste des menus après modification
      });
    }
  }

  // Supprimer un menu
  deleteMenu(): void {
    if (this.menu && this.menu.id) {
      this.menuService.deleteMenu(this.menu.id).subscribe(() => {
        alert('Menu supprimé avec succès!');
        this.router.navigate(['/menus']);  // Rediriger vers la liste des menus après suppression
      });
    }
  }
}
