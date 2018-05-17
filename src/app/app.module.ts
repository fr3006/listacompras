import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PendientesComponent } from './pendientes/pendientes.component';
import { TerminadosComponent } from './terminados/terminados.component';
import { ServiciosService } from './servicios.service';


@NgModule({
  declarations: [
    AppComponent,
    PendientesComponent,
    TerminadosComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
