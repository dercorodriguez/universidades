import { Injectable } from '@angular/core';
import { favoritos } from '../models/favoritos';
import { universidades } from '../models/universidades';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  public ifavoritos: favoritos;
  public iuniversidades: universidades;

  iarfavoritos: favoritos[] = [];
  iaruniversidades: universidades[] = [];

  constructor() { }

  clearitem() {
    localStorage.clear();
  }
  
  getitemUniv() {
    return JSON.parse(localStorage.getItem('universidad'));
  }
  setitemUniv() {
    localStorage.setItem('universidad', JSON.stringify(this.iuniversidades));
  }
  removeitemUniv() {
    localStorage.removeItem('universidad');
  }

  getitemFav() {
    return JSON.parse(localStorage.getItem('favoritos'));
  }
  setitemFav() {
    const ilistfavoritos = JSON.parse(localStorage.getItem('favoritos'));
    let lista: favoritos[];
    if (ilistfavoritos) {
      lista = Object.values(ilistfavoritos);
      let llista = lista.filter(elem => elem.id !== this.ifavoritos.id)
      localStorage.clear();
      llista.push(this.ifavoritos);
      // this.iarfavoritos.push(this.ifavoritos);
      localStorage.setItem('favoritos', JSON.stringify(llista));
    }
    else {
      this.iarfavoritos.push(this.ifavoritos);
      localStorage.setItem('favoritos', JSON.stringify(this.iarfavoritos));
    }    
  }
  removeitemFav() {
    localStorage.removeItem('favoritos');
  }

  removeItemSelec(id: Number) {
    const ilistfavoritos = JSON.parse(localStorage.getItem('favoritos'));
    let lista: favoritos[];
    if (ilistfavoritos) {
      lista = Object.values(ilistfavoritos);
      const llista = lista.filter(elem => elem.id !== id)
      localStorage.clear();
      localStorage.setItem('favoritos', JSON.stringify(llista));
    }
  }

}
