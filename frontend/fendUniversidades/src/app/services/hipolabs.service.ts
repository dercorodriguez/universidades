import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HipolabsService {
  urlService = "";
  constructor(private http: HttpClient) { 
    this.urlService = environment.urlHipolabs;
  }

  getHipolabs(pais: string)  {
    let urlHipolabs = this.urlService + pais;
    return this.http.get<any[]>(urlHipolabs);
  }
}
