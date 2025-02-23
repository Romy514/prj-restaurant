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
  menus: Menu[] = [];
  menu: Menu = { id: 0, nom: '', description: '', statut: '', date_creation: '' };
  isEditMode: boolean = false;
  maxIdMenu: number = 0;

  constructor(
    private menuService: MenuServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      if (!isNaN(id) && id > 0) {
        this.isEditMode = true;
        this.getMenu(id);
      } else {
        this.isEditMode = false;
      }
    });

    this.menu.date_creation = new Date().toISOString().split('T')[0];

    this.menuService.getMenus().subscribe(data => {
      this.menus = data;
      if (this.menus.length > 0) {
        this.maxIdMenu = Math.max(...this.menus.map(m => m.id));
      }
    });
  }

  getMenu(id: number): void {
    this.menuService.getMenu(id).subscribe(
      (data: Menu) => {
        this.menu = data;
      },
      (error) => {
        console.error('Erreur lors du chargement du menu', error);
      }
    );
  }

  saveMenu(): void {
    this.menu.date_creation = new Date().toISOString().split('T')[0]; // Transforme la date en string pour l'API

    if (this.isEditMode) {
      this.menuService.updateMenu(this.menu.id, this.menu).subscribe(
        () => {
          alert('Menu modifié avec succès!');
          this.router.navigate(['/menus']);
        },
        (error) => {
          console.error('Erreur lors de la modification du menu', error);
        }
      );
    } else {
      this.menu.id = this.maxIdMenu ? this.maxIdMenu + 1 : 1;

      this.menuService.addMenu(this.menu).subscribe(
        () => {
          alert('Menu ajouté avec succès!');
          this.router.navigate(['/menus']);
        },
        (error) => {
          console.error("Erreur lors de l'ajout du menu", error);
        }
      );
    }
  }
}
