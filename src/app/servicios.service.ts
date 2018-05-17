import { Injectable } from '@angular/core';
import { ListaItem } from './clases/listas-item';
import { Lista } from './clases/listas';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  listas: Lista[] = [];
  constructor() {
    let lista1 = new Lista('compras market');
    let lista2 = new Lista('juegos de video');
    let lista3 = new Lista('compras market');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);
  }
}
