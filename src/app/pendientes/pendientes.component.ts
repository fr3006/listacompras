import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';



@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']

})
export class PendientesComponent implements OnInit {

  constructor( private _ListaDeseos : ServiciosService) { }

  ngOnInit() {
  }

}
