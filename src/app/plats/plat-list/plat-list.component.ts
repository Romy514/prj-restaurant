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

  plats: Plat[] = [];
  menuId: number | null = null;

  constructor(
    private platService: PlatServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.menuId = Number(params.get('menuId'));
      console.log(this.menuId)

      this.getPlats();
    });
  }

  getPlats(): void {
    //Menu dans l'url
    if (this.menuId) {
      this.platService.getPlatsByMenu(this.menuId).subscribe(
        (data: Plat[]) => this.plats = data,
        error => console.error('Erreur lors du chargement des plats par menu', error)
      );
    } else {
      //Pas de menu indiqué (accès via /plats)
      this.platService.getPlats().subscribe(
        (data: Plat[]) => this.plats = data,
        error => console.error('Erreur lors du chargement des plats', error)
      );
    }
  }
}
