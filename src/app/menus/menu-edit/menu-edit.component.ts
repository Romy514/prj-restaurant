import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuServiceService } from '../../services/menu-service.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  menu: Menu = { id: 0, nom: '', description: '', statut: '', date_creation: '' }; // Menu initialisé
  isEditMode: boolean = false;  // Mode édition (false = ajout, true = modification)

  constructor(
    private menuService: MenuServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    // Vérifier si l'ID est présent dans l'URL
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Récupère l'ID du menu dans l'URL
      if (id) {
        // Si l'ID existe, on passe en mode édition
        this.menu.id = +id;
        this.isEditMode = true;
        this.getMenu(this.menu.id);  // Récupérer les détails du menu depuis le service
      } else {
        // Si l'ID n'est pas présent, on est en mode ajout
        this.menu = { id: 0, nom: '', description: '', statut: '', date_creation: '' };
        this.isEditMode = false;
      }
    });
  }
  
  // Fonction pour récupérer les détails du menu depuis le service
  getMenu(id: number): void {
    this.menuService.getMenu(id).subscribe(
      (data: Menu) => {
        this.menu = data;  // Remplir le formulaire avec les détails du menu
      },
      (error) => {
        console.error('Erreur lors du chargement du menu', error);
      }
    );
  }
  
  saveMenu(): void {
    if (this.isEditMode) {
      // Mode modification : appel PUT
      this.menuService.updateMenu(this.menu.id, this.menu).subscribe(
        (updatedMenu: Menu) => {
          console.log('Menu modifié', updatedMenu);
          this.router.navigate(['/menus']);  // Rediriger vers la liste des menus
        },
        (error) => {
          console.error('Erreur lors de la modification du menu', error);
        }
      );
    } else {
      // Mode ajout : appel POST
      this.menuService.addMenu(this.menu).subscribe(
        (newMenu: Menu) => {
          console.log('Menu ajouté', newMenu);
          this.router.navigate(['/menus']);  // Rediriger vers la liste des menus
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du menu', error);
        }
      );
    }
  }
  
}
