import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { TerminadosComponent } from './terminados/terminados.component';
import { ServiciosService } from './servicios.service';
import { FormularioComponent } from './formulario/formulario.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PendientesComponent,
    TerminadosComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule

  ],
  providers: [
    ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
