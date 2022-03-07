import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { universidades } from '../../../models/universidades';
import { UniversidadecService } from '../../../services/universidadec.service';
import { Router, ActivatedRoute,  ParamMap  } from "@angular/router";

@Component({
  selector: 'app-agregaruniversidad',
  templateUrl: './agregaruniversidad.component.html',
  styleUrls: ['./agregaruniversidad.component.css']
})
export class AgregaruniversidadComponent implements OnInit {
  formUniversidad: FormGroup;
  iuniversidad: universidades;
  idUniversidad: Number;
  isnuevo: boolean;

  constructor( private fb: FormBuilder, private iUniversrv: UniversidadecService, private oroute: Router, private activatedRoute: ActivatedRoute  ) { 
    this.isnuevo = true;
    this.crearFormulario();
    this.idUniversidad = Number(activatedRoute.snapshot.paramMap.get('id'));
    if (this.idUniversidad) {
      this.iUniversrv.getIdUniversidad(this.idUniversidad)
        .subscribe(resultado => {
          this.iuniversidad = resultado;
          this.isnuevo = false;
          this.cargarFormulario()
        });
    } 
    else {
      this.idUniversidad = 0;
    }
  } 

  ngOnInit(): void {
  }

  crearFormulario() {

    this.formUniversidad = this.fb.group({
      nombre  : ['', [ Validators.required, Validators.minLength(10) ]  ],
      country: ['Ecuador', [Validators.required, Validators.minLength(4) ] ],
      web_pages  : ['', [ Validators.required, Validators.minLength(10)] ],
      image : ['', [ Validators.required, Validators.minLength(10)] ],
    });

  }

  cargarFormulario() {
   // this.forma.setValue({
    this.formUniversidad.reset({
      nombre : this.iuniversidad.name,
      country: this.iuniversidad.country,
      web_pages: this.iuniversidad.web_pages,
      image : this.iuniversidad.image
    });
  }

  get nombreNoValido() {
    return this.formUniversidad.get('nombre').invalid && this.formUniversidad.get('nombre').touched
  }

  get countryNoValido() {
    return this.formUniversidad.get('country').invalid && this.formUniversidad.get('country').touched
  }

  get web_pagesNoValido() {
    return this.formUniversidad.get('web_pages').invalid && this.formUniversidad.get('web_pages').touched
  }

  get imageNoValido() {
    return this.formUniversidad.get('image').invalid && this.formUniversidad.get('image').touched
  }

  onGrabar() {
    if ( this.formUniversidad.invalid ) {
      return;
    }

    this.iuniversidad = {
      id: this.idUniversidad,
      name: this.formUniversidad.controls.nombre.value,
      country: this.formUniversidad.controls.country.value,
      web_pages: this.formUniversidad.controls.web_pages.value,
      image: this.formUniversidad.controls.image.value,
      Status: 'A'
    }

    if (this.isnuevo) {
      this.iUniversrv.postUniversidad(this.iuniversidad)
      .subscribe(resultado => {
        this.oroute.navigate(['/consUniv']);
      });
    }
    else {
      this.iUniversrv.putUniversidad(this.idUniversidad, this.iuniversidad)
      .subscribe(resultado => {
        // Posteo de información
        this.formUniversidad.reset({
          nombre: '',
          //country: '',
          web_pages: '',
          image: ''
        });
    
        this.oroute.navigate(['/consUniv']);
      });

    }
    

  }
}
