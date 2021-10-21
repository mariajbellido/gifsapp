import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})

export class gifsService {

  private apiKey: string = 'c9BspfbF7N1eCB0fDFvtHl86HSVg2XSJ';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    
    return [...this._historial];
  }

  constructor( private http: HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

    // if (localStorage.getItem('historial')) {
    //  this._historial = JSON.parse(localStorage.getItem('historial')! );
    // }
  }

  buscarGifs(query: string = '') {
   
    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes( query )) {
      this._historial.unshift( query ); // Añadiendo nuevos elementos al principio del array (si NO existen en el historial)
      this._historial = this._historial.splice(0,10); // Limitando a 10 elementos nuestro sidebar

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe( ( response ) => {
        console.log(response.data);
        this.resultados = response.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
    
      })

    
    console.log(this._historial)
  }


}