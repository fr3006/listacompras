import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],

})
export class FormularioComponent implements OnInit {
  usuario: Object = {
    nombre: "Fernando",
    apellido: "rodriguez"
  };
  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

  guardar(f: NgForm) {
  if ( f.status === 'VALID' )  {
      console.log('guardado');
       console.log(f); //carga todo el objeto del ngmodel
       console.log(f.value); //carga los valores del input
    }
  else {
    console.log('NO guardado');
    this.ok();
  }
  }
  guardarDefecto(g: NgForm) {
    console.log(this.usuario);
  }
  guardarDefectocb(h: NgForm) {
    console.log(this.usuario);
  }
ok() {
   console.log('fffffffff');
   this.dialog.open(FormularioComponent, {
    data: {
      animal: 'panda'
    }
  });

}
}
