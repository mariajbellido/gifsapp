import { Component, ElementRef, ViewChild } from '@angular/core';
import { gifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
 
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsService: gifsService ) {

  }

  buscar(  ) {

      const valor = this.txtBuscar.nativeElement.value;
      
      this.gifsService.buscarGifs( valor );
      
      this.txtBuscar.nativeElement.value = '';

  }

}