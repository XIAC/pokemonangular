import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonResult } from '../modelos/pokemon.model';
@Injectable({
  providedIn: 'root'
})
export class PokemonServicioService {

  constructor(private httpService: HttpClient) {

   }
   getPokemon() {
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon/ditto');
   }
   getPokemones() {
    return this.httpService.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon');
   }

}
