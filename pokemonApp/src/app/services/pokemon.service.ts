import { map } from 'rxjs/operators';
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

  private pokemonOptions: {id: string, kdex: number, pokemonName: string} [];

  private pokemonUpdatedOptions = new Subject<{kdex: number, pokemonName: string}[]>();

  private pokemonList: Pokemon[] = [];
  private pokemonUpdatedList = new Subject<Pokemon[]>();

  addPokemon(p: Pokemon) {
    const url = 'http://localhost:3000/api/addPokemon';

    this.http.post<{message: string, postId: string}>(url, p)
             .subscribe( (responseData) => {
               const id = responseData.postId;
               p.id = id;
               this.pokemonList.push(p);
               this.pokemonUpdatedList.next([...this.pokemonList]);
             });
  }

  getPokemonOptions() {
    const url = 'http://localhost:3000/api/getPokemonOptions';

    return this.http.get<{messages: string, pokemon: any[]}>(url)
                    .pipe(map((pokemonData) => {
                      return pokemonData.pokemon.map( p => {
                       return {
                         id: p._id,
                         kdex: p.kdex,
                         pokemonName: p.pokemonName
                       };
                      });
                    }))
                    .subscribe( (transformedPokemon) => {
                      this.pokemonOptions = transformedPokemon;
                      this.pokemonUpdatedOptions.next([...this.pokemonOptions]);
                    });
  }

  getPokemonOptionsUpdateListener() {
    return this.pokemonUpdatedOptions.asObservable();
  }
}
