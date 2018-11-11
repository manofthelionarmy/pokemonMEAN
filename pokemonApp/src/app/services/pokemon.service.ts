import { Evolutions } from './../models/pokemon/evolutions.model';
import { Resistances } from 'src/app/models/pokemon/resistances.model';
import { Weaknesses } from './../models/pokemon/weaknesses.model';
import { Abilities } from './../models/pokemon/abilities.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './../models/pokemon/pokemon.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private pokemon: Pokemon;

  private pokemonAdded = new Subject<Pokemon>();

  addPokemon(p: Pokemon) {
    const url = 'http://localhost:3000/api/addPokemon';

    this.http.post<Pokemon>(url, p).subscribe();
  }
}
