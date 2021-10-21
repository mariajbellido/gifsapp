import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: "root"
})

export class gifsService {

  private apiKey: string = 'c9BspfbF7N1eCB0fDFvtHl86HSVg2XSJ';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    
    return [...this._historial];
  }

  constructor( private http: HttpClient){

    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')! );
    }
  }

  buscarGifs(query: string = '') {
   
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes( query )) {
      this._historial.unshift( query ); // Añadiendo nuevos elementos al principio del array (si NO existen en el historial)
      this._historial = this._historial.splice(0,10); // Limitando a 10 elementos nuestro sidebar

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=c9BspfbF7N1eCB0fDFvtHl86HSVg2XSJ&q=${query}&limit=10`)
      .subscribe( ( response ) => {
        console.log(response.data);
        this.resultados = response.data;
    
      })

    
    console.log(this._historial)
  }


}