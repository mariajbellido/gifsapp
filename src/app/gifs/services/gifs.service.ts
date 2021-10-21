import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})

export class gifsService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    this._historial.unshift( query );
    console.log(this._historial)
  }


}