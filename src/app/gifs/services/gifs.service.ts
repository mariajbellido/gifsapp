import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})

export class gifsService {

  private apiKey: string = 'c9BspfbF7N1eCB0fDFvtHl86HSVg2XSJ';
  private _historial: string[] = [];

  public resultados: any[] = [];

  get historial() {
    
    return [...this._historial];
  }

  constructor( private http: HttpClient){}

  buscarGifs(query: string = '') {
   
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes( query )) {
      this._historial.unshift( query ); // Añadiendo nuevos elementos al principio del array (si NO existen en el historial)
      this._historial = this._historial.splice(0,10); // Limitando a 10 elementos nuestro sidebar
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=c9BspfbF7N1eCB0fDFvtHl86HSVg2XSJ&q=${query}&limit=10`)
      .subscribe( ( response: any ) => {
        console.log(response.data);
        this.resultados = response.data;
      })

    
    console.log(this._historial)
  }


}