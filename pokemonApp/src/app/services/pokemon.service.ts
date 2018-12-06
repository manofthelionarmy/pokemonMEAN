import { environment } from './../../environments/environment';
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

  private pokemonUpdatedOptions = new Subject<{id: string, kdex: number, pokemonName: string}[]>();


  private retrievedPokemon: Pokemon;
  private pokemonUpdated = new Subject<Pokemon>();

  private pokemonList: Pokemon[] = [];
  private pokemonUpdatedList = new Subject<Pokemon[]>();

  // Used for pokemon-list to display the list of pokemon (pokedex)
  private pokemonGetList: {id: string, kdex: number, pokemonName: string, types: string} [] = [];
  private pokemonGetListUpdated = new Subject<{id: string, kdex: number, pokemonName: string, types: string}[]>();

  private selectedPokemon: {id: string, kdex: number, pokemonName: string};
  private selectedPokemonFeed = new Subject<{id: string, kdex: number, pokemonName: string}>();

  addPokemon(p: Pokemon) {
    const url = environment.apiUrl + '/addPokemon';

    this.http.post<{message: string, pokemonId: string}>(url, p)
             .subscribe( (responseData) => {
               const id = responseData.pokemonId;
               p.id = id;
               this.pokemonList.push(p);
               this.pokemonUpdatedList.next([...this.pokemonList]);
             });
  }

  getPokemonOptions() {
    const url = environment.apiUrl + '/getPokemonOptions';

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

                      // console.log(this.pokemonOptions);
                      this.pokemonUpdatedOptions.next([...this.pokemonOptions]);
                    });
  }

  // for pokemon-list Won't work for some reason
  getPokemon() {
    const url = environment.apiUrl + '/getPokemon';

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

  getAPokemon(id: string) {
    const url = environment.apiUrl + `/getPokemon/${id}`;

    return this.http.get<{message: string, pokemon: Pokemon}>(url).subscribe((resposeData) => {
      this.retrievedPokemon = resposeData.pokemon;
      this.pokemonUpdated.next(this.retrievedPokemon);
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

  getPokemonUpdatedListener() {
    return this.pokemonUpdated.asObservable();
  }

}
