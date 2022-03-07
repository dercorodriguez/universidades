import { Component, OnInit } from '@angular/core';
import { UniversidadecService } from '../../../services/universidadec.service';
import { universidades } from '../../../models/universidades';
import { Router } from "@angular/router";

@Component({
  selector: 'app-consultarr-universidad',
  templateUrl: './consultar-universidad.component.html',
  styleUrls: ['./consultar-universidad.component.css']
})
export class ConsultarUniversidadComponent implements OnInit {
  iuniversidades: universidades[];
  iuniversidad: universidades;
  constructor(private universidadesService: UniversidadecService, private oroute: Router ) { }

  ngOnInit(): void {
    this.ongetUiniversidades();
  }

  ongetUiniversidades() {
    this.universidadesService.getUniversidad()
      .subscribe(resultado => {
        this.iuniversidades = resultado;
        console.log("universidad", resultado);
      });
  }

  onNuevo() {
    this.oroute.navigate(['/newUniv']);
  }
  onEditar(item: universidades) {
    this.oroute.navigate(['/newUniv',{"id": item.id}]);
  }

  onEliminar(item: universidades) {
    this.universidadesService.deleteUniversidad(item.id)
    .subscribe(resultado => {
      this.iuniversidad = resultado;
      this.ongetUiniversidades();
    });
  }

  onChange(pais) {
    this.universidadesService.getBuscarUniversidad(pais)
      .subscribe(resultado => {
        this.iuniversidades = resultado;
        console.log("universidad", resultado);
      });
  }
}
