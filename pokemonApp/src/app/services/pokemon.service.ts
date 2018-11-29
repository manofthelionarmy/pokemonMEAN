import { Attacks } from './../models/pokemon/attacks.model';
import { map } from 'rxjs/operators';
import { Evolutions } from './../models/pokemon/evolutions.model';
import { Resistances } from 'src/app/models/pokemon/resistances.model';
import { Weaknesses } from './../models/pokemon/weaknesses.model';
import { Abilities } from './../models/pokemon/abilities.model';
import { Subject, Observable } from 'rxjs';
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

  // Used for pokemon-list to display the list of pokemon (pokedex)
  private pokemonGetList: {id: string, kdex: number, pokemonName: string, types: string} [] = [];
  private pokemonGetListUpdated = new Subject<{id: string, kdex: number, pokemonName: string, types: string}[]>();

  private selectedPokemon: {id: string, kdex: number, pokemonName: string};
  private selectedPokemonFeed = new Subject<{id: string, kdex: number, pokemonName: string}>();

  addPokemon(p: Pokemon) {
    const url = 'http://localhost:3000/api/addPokemon';

    this.http.post<{message: string, pokemonId: string}>(url, p)
             .subscribe( (responseData) => {
               const id = responseData.pokemonId;
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

  // for pokemon-list Won't work for some reason
  getPokemon() {
    const url = 'http://localhost:3000/api/getPokemon';

    return this.http.get<{messages: string, pokemon: any[]}>(url)
                    .pipe( map( (responseData) => {
                      return responseData.pokemon.map( p => {
                        return {
                          id: p.id,
                          kdex: p.kdex,
                          pokemonName: p.pokemonName,
                          types: p.types
                        };
                      });
                    }))
                    .subscribe((responseData) => {

                      this.pokemonGetList = responseData;

                      this.pokemonGetListUpdated.next([...this.pokemonGetList]);

                    });

  }

  getPokemonOptionsUpdateListener() {
    return this.pokemonUpdatedOptions.asObservable();
  }

  // Getting the feed of the selected pokemon
  addToSelectedPokemonFeed(pokemon: {id: string, kdex: number, pokemonName: string}) {
    this.selectedPokemonFeed.next(pokemon);
  }

  // The Movset List Component will retrieve the value selected from the form
  getSelectedPokemon() {
    return this.selectedPokemonFeed.asObservable();
  }

  // Used for pokemon-list and will be able to access desired data
  getPokemonGetListUpdatedListener() {
    return this.pokemonGetListUpdated.asObservable();
  }

}
