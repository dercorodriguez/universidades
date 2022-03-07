import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { favoritos } from '../models/favoritos';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  ifavoritos: favoritos;
  urlService = environment.urlService;
  constructor(private http: HttpClient) { 
    this.urlService += environment.urlFavoritos;
  }

  getBuscarFavorito(pais: string)  {
    this.urlService = environment.urlService + environment.urlBuscarFavorito + "?keyvalues=" + pais;
    console.log(this.urlService);
    return this.http.get<favoritos[]>(this.urlService);
  }

  getFavoritos()  {
    this.urlService = environment.urlService + environment.urlFavoritos;
    return this.http.get<favoritos[]>(this.urlService);
  }

  getIdFavoritos(id: Number)  {
    this.urlService = environment.urlService + environment.urlFavoritos + "/" + id;
    return this.http.get<favoritos>(this.urlService);
  } 
  postFavoritos(favor: favoritos) {
    console.log('entre', favor);
    this.urlService = environment.urlService + environment.urlFavoritos;
    console.log('entrex', this.urlService);
    return this.http.post<favoritos>(this.urlService, favor);
  }

  putFavoritos(id: Number, favor: favoritos) {
    this.urlService = environment.urlService + environment.urlFavoritos + "/" + id;
    return this.http.put<favoritos>(this.urlService, favor);
  }

  deleteUniversidad(id: Number)  {
    this.urlService = environment.urlService + environment.urlFavoritos + "/" + id;
    return this.http.delete<favoritos>(this.urlService);
  }
}
