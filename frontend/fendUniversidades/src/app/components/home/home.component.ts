import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { LocalstorageService } from '../../services/localstorage.service';
import { favoritos } from '../../models/favoritos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ifavoritos: favoritos[] = [];
  iexiste: boolean;
  
  constructor(private favoritosSrv: FavoritosService, private localstorageSrv: LocalstorageService) { }

  ngOnInit(): void {
     // Este código carga el reproductor de la API en un iframe de manera asíncrona, siguiendo las instrucciones:
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    //const tag = document.createElement('script');
    // tag.src = "https://www.youtube.com/iframe_api";
    // document.body.appendChild(tag);

    this.iexiste = false;
    this.getFavoritos();
  }

  getFavoritos() {    
    this.ifavoritos = this.localstorageSrv.getitemFav();
    if (this.ifavoritos) {
      if (this.ifavoritos.length > 0) {
        this.iexiste = true;
      }
    }
  }

}
