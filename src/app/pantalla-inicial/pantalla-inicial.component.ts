import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pantalla-inicial',
  templateUrl: './pantalla-inicial.component.html',
  styleUrls: ['./pantalla-inicial.component.css']
})



export class PantallaInicialComponent implements OnInit {
  opcionSeleccionada = "1";
  idiomaSeleccionado = "Español";
  idiomas: string[] = ['Español', 'Ingles', 'Francés', 'Italiano', 'Aleman'];
  cartas: string[] = ['Embajada con presupuesto', 'Embajada y otros con presupuesto', 'Universidades y otros', 'Universidades y otros (EU)', 'Extension de estudios'];
  columnsToDisplay: string[] = ['carta'];
  ngOnInit() {
  }

}
