import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../../services/favoritos.service';
import { favoritos } from '../../../models/favoritos';
import { Router } from "@angular/router";
import { LocalstorageService } from '../../../services/localstorage.service';

@Component({
  selector: 'app-consultar-favorito',
  templateUrl: './consultar-favorito.component.html',
  styleUrls: ['./consultar-favorito.component.css']
})
export class ConsultarFavoritoComponent implements OnInit {
  ifavoritos: favoritos[];
  ifavorito: favoritos;

  constructor(private favoritosService: FavoritosService, private oroute: Router,
    private localService: LocalstorageService ) { }

  ngOnInit(): void {
    this.ongetFavoritos();
  }

  ongetFavoritos() {
    this.favoritosService.getFavoritos()
      .subscribe(resultado => {
        this.ifavoritos = resultado;
      });
  }

  onNuevo() {
    this.oroute.navigate(['/newFavor']);
  }
  onEditar(item: favoritos) {
    this.oroute.navigate(['/newFavor',{"id": item.id}]);
  }

  onEliminar(item: favoritos) {
    this.favoritosService.deleteUniversidad(item.id)
    .subscribe(resultado => {
      this.ifavorito = resultado;
      this.localService.removeItemSelec(item.id);
      this.ongetFavoritos();      
    });
  }

  onChange(pais) {
    this.favoritosService.getBuscarFavorito(pais)
      .subscribe(resultado => {
        this.ifavoritos = resultado;
      });
  }
}
