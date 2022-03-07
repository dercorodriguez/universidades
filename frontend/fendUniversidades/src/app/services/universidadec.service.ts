import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { universidades } from '../models/universidades';

@Injectable({
  providedIn: 'root'
})
export class UniversidadecService {
  iuniversidades: universidades;
  urlService = environment.urlService;
  constructor(private http: HttpClient) { 
    this.urlService += environment.urlUniversidad;
  }

  getBuscarUniversidad(pais: string)  {
    this.urlService = environment.urlService + environment.urlBuscarUniversidad + "?keyvalues=" + pais;
    return this.http.get<universidades[]>(this.urlService);
  }

  getUniversidad()  {
    this.urlService = environment.urlService + environment.urlUniversidad;
    return this.http.get<universidades[]>(this.urlService);
  }

  getIdUniversidad(id: Number)  {
    this.urlService = environment.urlService + environment.urlUniversidad + "/" + id;
    return this.http.get<universidades>(this.urlService);
  }
  postUniversidad(univ: universidades) {
    return this.http.post<universidades>(this.urlService, univ);
  }

  putUniversidad(id: Number, univ: universidades) {
    this.urlService = environment.urlService + environment.urlUniversidad + "/" + id;
    return this.http.put<universidades>(this.urlService, univ);
  }

  deleteUniversidad(id: Number)  {
    this.urlService = environment.urlService + environment.urlUniversidad + "/" + id;
    return this.http.delete<universidades>(this.urlService);
  }
}
