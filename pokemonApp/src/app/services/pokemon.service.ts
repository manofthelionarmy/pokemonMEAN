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


  private pokemonGetList: {id: string, kdex: number, pokemonName: string}[] = [];
  private pokemonGetUpdateList = new Subject<{id: string, kdex: number, pokemonName: string}[]>();

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

  getPokemon() {
    const url = 'http://localhost:3000/api/getPokemon';

    return this.http.get<{messages: string, pokemon: any[]}>(url)
                    .pipe( map( (responseData) => {
                      return responseData.pokemon.map( p => {
                        return {
                          id: p.id,
                          kdex: p.kdex,
                          pokemonName: p.pokemonName
                        };
                      });
                    }))
                    .subscribe((responseData) => {

                      this.pokemonGetList = responseData;

                      this.pokemonGetUpdateList.next([...this.pokemonGetList]);

                    });
    /*return this.http.get<{messages: string, pokemon: {id: string, kdex: number, pokemonName: string}}>(url)
                    .subscribe((responseData) => {
                      console.log(responseData);
                    });*/
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

  getPokemonUpdatedListListner() {
    return this.pokemonGetUpdateList.asObservable();
  }
}
