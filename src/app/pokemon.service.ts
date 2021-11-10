import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
 
  baseUrl = "https://api.pokemontcg.io"

  constructor(private http: HttpClient) { }

public getPokemon():Observable<any>{
  return this.http.get(`${this.baseUrl}/v1/cards`)
    
}

}
