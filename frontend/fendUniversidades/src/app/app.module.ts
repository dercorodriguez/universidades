import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarFavoritoComponent } from './components/favoritos/agregar-favorito/agregar-favorito.component';
import { ConsultarFavoritoComponent } from './components/favoritos/consultar-favorito/consultar-favorito.component';
import { ConsultarUniversidadComponent } from './components/universidades/consultar-universidad/consultar-universidad.component';
import { ConsultarlabsComponent } from './components/hipolabs/consultarlabs/consultarlabs.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { AgregaruniversidadComponent } from './components/universidades/agregaruniversidad/agregaruniversidad.component';
import { MaterialModule } from './material/material.module';
import { BuscaruniversidadComponent } from './components/busqueda/buscaruniversidad/buscaruniversidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AgregarFavoritoComponent,
    ConsultarFavoritoComponent,
    ConsultarUniversidadComponent,
    ConsultarlabsComponent,
    ModalComponent,
    AgregaruniversidadComponent,
    BuscaruniversidadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
