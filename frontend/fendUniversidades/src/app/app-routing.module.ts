import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsultarFavoritoComponent } from './components/favoritos/consultar-favorito/consultar-favorito.component';
import { AgregarFavoritoComponent } from './components/favoritos/agregar-favorito/agregar-favorito.component';
import { ConsultarUniversidadComponent } from './components/universidades/consultar-universidad/consultar-universidad.component';
import { ConsultarlabsComponent } from './components/hipolabs/consultarlabs/consultarlabs.component';
import { AgregaruniversidadComponent } from './components/universidades/agregaruniversidad/agregaruniversidad.component';
import { BuscaruniversidadComponent } from './components/busqueda/buscaruniversidad/buscaruniversidad.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'consFav', component:  ConsultarFavoritoComponent },
  { path: 'consUniv', component:  ConsultarUniversidadComponent },
  { path: 'newUniv', component:  AgregaruniversidadComponent },
  { path: 'newFavor', component:  AgregarFavoritoComponent },
  { path: 'consLabs', component:  ConsultarlabsComponent },
  { path: 'busquniv', component:  BuscaruniversidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
