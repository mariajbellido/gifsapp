import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})

export class gifsService {

  private _historial: string[] = [];

  get historial() {
    
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
   
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes( query )) {
      this._historial.unshift( query ); // Añadiendo nuevos elementos al principio del array (si NO existen en el historial)
      this._historial = this._historial.splice(0,10); // Limitando a 10 elementos nuestro sidebar
    }

    
    console.log(this._historial)
  }


}