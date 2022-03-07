import { Component, OnInit } from '@angular/core';
import { HipolabsService } from '../../../services/hipolabs.service';
import { favoritos } from '../../../models/favoritos';
import { FavoritosService } from '../../../services/favoritos.service';
import { LocalstorageService } from '../../../services/localstorage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consultarlabs',
  templateUrl: './consultarlabs.component.html',
  styleUrls: ['./consultarlabs.component.css']
})
export class ConsultarlabsComponent implements OnInit {
  ilabs: any[] = [];
  ilabsx: any[] = [];
  seleccionado: string;
  ifavorito: favoritos; 
  constructor(private hipolabsService: HipolabsService, private ifavoritossrv: FavoritosService,
    private localstorageService: LocalstorageService, private activatedRoute: ActivatedRoute, private oroute: Router ) { }

  ngOnInit(): void {
    this.ongetHipolabs();
  }

  ongetHipolabs() {
    this.ilabs = [];
    this.hipolabsService.getHipolabs("Ecuador")
      .subscribe(resultado => {
        let lista: favoritos[] = [];
        const ilistfavoritos = JSON.parse(localStorage.getItem('favoritos'));
        if (!ilistfavoritos) {
          this.ilabs = resultado;
        }
        else {
          lista = Object.values(ilistfavoritos);        
          this.ilabsx = resultado; 
          this.ilabsx.forEach(element => {
            const encontrado = lista.filter(elem => element.country === elem.country && element.name === elem.name);
            if (encontrado.length === 0) {
              this.ilabs.push(element);
            }
        });            
      }
    });        
  };

  onChange(pais) {
    this.ilabs = [];
    this.hipolabsService.getHipolabs(pais)
    .subscribe(resultado => {
      let lista: favoritos[];
      const ilistfavoritos = JSON.parse(localStorage.getItem('favoritos'));
      lista = Object.values(ilistfavoritos);        
      this.ilabsx = resultado; 
      this.ilabsx.forEach(element => {
          const encontrado = lista.filter(elem => element.country === elem.country && element.name === elem.name);
          if (encontrado.length === 0) {
            this.ilabs.push(element);
          }
        });
      });  
    }

  onAgregar(item) {
    this.ifavorito = {
      id: 0,
      name: item.name,
      country: item.country,
      web_pages: item.domains[0],
      image: './assets/imagen/imagen1.jpg',
      imagelocal: '',
      Status: 'A'
    }
    
    this.ifavoritossrv.postFavoritos(this.ifavorito)
      .subscribe(resultado => {
        /*
        this.localstorageService.ifavoritos = resultado;        
        this.localstorageService.setitemFav();  
        this.oroute.navigate(['/consFav']);     
        */
        this.oroute.navigate(['/newFavor',{"id": resultado.id}]);
      });
  }
}
