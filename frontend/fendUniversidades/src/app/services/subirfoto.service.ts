import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class SubirfotoService {
  URI = environment.urlService + environment.urlSubirArchivo;
  constructor(private http: HttpClient) { }

  createPhoto(photo: File) {
    const fd = new FormData();
    fd.append('archivo', photo);
    return this.http.post<any>(this.URI, fd);
  }

  getPhotos() {
    return this.http.get<Photo[]>(this.URI);
  }

  getPhoto(id: string) {
    return this.http.get<Photo>(`${this.URI}/${id}`);
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updatePhoto(id: string, title: string, description: string) {
    return this.http.put(`${this.URI}/${id}`, {title, description});
  }
}
