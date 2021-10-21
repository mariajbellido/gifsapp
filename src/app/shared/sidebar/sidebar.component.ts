import { Component } from '@angular/core';
import { gifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  
})
export class SidebarComponent {

  get historial() {
    return this.gifsService.historial;
  }

  constructor ( private gifsService:gifsService  ) {

  }

  buscar( termino: string) {
    this.gifsService.buscarGifs(termino);
  }

}