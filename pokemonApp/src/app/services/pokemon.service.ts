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

  private selectedPokemon: {id: string, kdex: number, pokemonName: string};
  private selectedPokemonFeed = new Subject<{id: string, kdex: number, pokemonName: string}>();

  private attackList: Attacks[] = [];
  private allAttacksListUpdated = new Subject<Attacks[]>();
  private selectedAttackFeed = new Subject<Attacks[]>();
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

  addAttack(a: Attacks) {
    const url = 'http://localhost:3000/api/addAttack/';

    console.log(a.attackName);

    this.http.post<{message: string, attackId: string}>(url, a)
             .subscribe((responseData) => {
               const id = responseData.attackId;
               a.id = id;
               this.attackList.push(a);
               this.allAttacksListUpdated.next([...this.attackList]);
             });

  }

  getAttackOptions() {
    const url = 'http://localhost:3000/api/getAttackOptions';

    return this.http.get<{message: string, attacks: Attacks[]}>(url)
                    .subscribe( (tranformedAttack) => {
                      this.attackList = tranformedAttack.attacks;
                      this.allAttacksListUpdated.next([...this.attackList]);
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

  getAttacksListUpdatedListener() {
    return this.allAttacksListUpdated.asObservable();
  }

  // Getting the feed of the selected pokemon
  addToSelectedPokemonFeed(pokemon: {id: string, kdex: number, pokemonName: string}) {
    this.selectedPokemonFeed.next(pokemon);
  }

  addToSelectedAttackFeed(attacks: Attacks[]) {
    this.selectedAttackFeed.next([...attacks]);
  }

  // The Movset List Component will retrieve the value selected from the form
  getSelectedPokemon() {
    return this.selectedPokemonFeed.asObservable();
  }

  getSelectedAttacks() {
    return this.selectedAttackFeed.asObservable();
  }

  /**
   * For pokemon-list, Rolly.
   */
  getSelectedPokemonList() {
    return this.pokemonUpdatedList.asObservable();
  }

  /**Now that we have selected the pokemon from
   * Movset Create Component, we can get its moveset*/
  // Need to actually create an endpoint for this on the backend app
  /*queryForSelectedPokemon(pokemon: {id: string, kdex: number, pokemonName: string}) {
    const url = `http://localhost:3000/api/getAttacks/${pokemon.id}/${pokemon.kdex}/${pokemon.pokemonName}`;
    // alert(pokemon.id);
    this.http.get<{ message: string, response: any }>(url).subscribe((res) => {
      // alert(res.message + ' ' + res.response);
      this.attackList = [];
      this.queriedPokemonAttackList.next([...this.attackList]);
    });
  }*/

  /*getAttackListsFromQuery() {
    return this.queriedPokemonAttackList.asObservable();
  }*/
}
