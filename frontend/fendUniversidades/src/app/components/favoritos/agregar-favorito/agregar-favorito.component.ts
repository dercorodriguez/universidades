import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { favoritos } from '../../../models/favoritos';
import { FavoritosService } from '../../../services/favoritos.service';
import { Router, ActivatedRoute,  ParamMap  } from "@angular/router";
import { LocalstorageService } from '../../../services/localstorage.service';
import { SubirfotoService } from '../../../services/subirfoto.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-agregar-favorito',
  templateUrl: './agregar-favorito.component.html',
  styleUrls: ['./agregar-favorito.component.css']
})
export class AgregarFavoritoComponent implements OnInit {
  formFavoritos: FormGroup;
  ifavoritos: favoritos;
  
  idFavoritos: Number;
  isnuevo: boolean;
  
  photoSelected: string | ArrayBuffer;
  file: File;
  retorno: any;

  constructor( private fb: FormBuilder, private ifavoritossrv: FavoritosService, private oroute: Router, 
      private activatedRoute: ActivatedRoute, private localstorageService: LocalstorageService,
      private subirphotoSrv: SubirfotoService ) { 

    this.isnuevo = true;
    this.crearFormulario();
    this.idFavoritos = Number(activatedRoute.snapshot.paramMap.get('id'));
    if (this.idFavoritos) {
      this.ifavoritossrv.getIdFavoritos(this.idFavoritos)
        .subscribe(resultado => {
          this.ifavoritos = resultado;
          this.isnuevo = false;
          this.cargarFormulario()
        });
    } 
    else {
      this.idFavoritos = 0;
    }
  }


  ngOnInit(): void {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  async uploadPhoto() {
    this.subirphotoSrv
      .createPhoto(this.file)
      .subscribe(
        res => {
          this.retorno = res;
          console.log('upload', res);
        },
        err => console.log('zzzz', err)
      );    
  }

  crearFormulario() {

    this.formFavoritos = this.fb.group({
      nombre  : ['', [ Validators.required, Validators.minLength(10) ]  ],
      country: ['Ecuador', [Validators.required, Validators.minLength(4) ] ],
      web_pages  : ['', [ Validators.required, Validators.minLength(5)] ],
      image : ['', [ Validators.required, Validators.minLength(10)] ],
      imagelocal: ['']
    });

  }

  cargarFormulario() {
   // this.forma.setValue({
    this.formFavoritos.reset({
      nombre : this.ifavoritos.name,
      country: this.ifavoritos.country,
      web_pages: this.ifavoritos.web_pages,
      image : this.ifavoritos.image,
      imagelocal : this.ifavoritos.imagelocal.trim() !== '' ? this.ifavoritos.imagelocal: './assets/imagen/imagen1.jpg'
    });
  }

  get nombreNoValido() {
    return this.formFavoritos.get('nombre').invalid && this.formFavoritos.get('nombre').touched
  }

  get countryNoValido() {
    return this.formFavoritos.get('country').invalid && this.formFavoritos.get('country').touched
  }

  get web_pagesNoValido() {
    return this.formFavoritos.get('web_pages').invalid && this.formFavoritos.get('web_pages').touched
  }

  get imageNoValido() {
    return this.formFavoritos.get('image').invalid && this.formFavoritos.get('image').touched
  }

  async onGrabar() {
    console.log("grabando");
    if ( this.formFavoritos.invalid ) {
      console.log("formulario invalido");
      return;
    }
    
    let rurafoto;
    if (this.file) {
      await this.subirphotoSrv
      .createPhoto(this.file)
      .subscribe(
        res => {
          this.retorno = res;
          this.ifavoritos = {
            id: this.idFavoritos,
            name: this.formFavoritos.controls.nombre.value,
            country: this.formFavoritos.controls.country.value,
            web_pages: this.formFavoritos.controls.web_pages.value,
            image: this.formFavoritos.controls.image.value,
            imagelocal: this.retorno.rutafoto,
            Status: 'A'
          }
      
          if (this.isnuevo) {
            this.ifavoritossrv.postFavoritos(this.ifavoritos)
            .subscribe(resultado => {
              this.localstorageService.ifavoritos = resultado;
              this.localstorageService.setitemFav();
              // Posteo de información
              this.formFavoritos.reset({
                nombre: '',
                //country: '',
                web_pages: '',
                image: ''
              });   
      
              this.oroute.navigate(['/consFav']);
            });
          }
          else {
            this.ifavoritossrv.putFavoritos(this.idFavoritos, this.ifavoritos)
            .subscribe(resultado => {
              this.localstorageService.ifavoritos = this.ifavoritos;
              this.localstorageService.setitemFav();
              // Posteo de información
              this.formFavoritos.reset({
                nombre: '',
                //country: '',
                web_pages: '',
                image: ''
              });
              this.oroute.navigate(['/consFav']);
            });
          }
        },
        err => console.log('zzzz', err)
      );    
    }
    else {
      rurafoto = '';
    }
  }
}
