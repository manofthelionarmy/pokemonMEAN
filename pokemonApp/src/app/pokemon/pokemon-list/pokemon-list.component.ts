import { Pokemon } from './../../models/pokemon/pokemon.model';
import { map } from 'rxjs/operators';
import { PokemonService } from './../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  constructor(private pokemonService: PokemonService) { }

  private pokeListSubs: Subscription;

  pokemonList: {id: string, kdex: number, pokemonName: string, types: string}[] = [];

  /**
   * The following until OnInit will be used for the organized table
   */
  pokeData: Pokemon[] = []; // Array of pokemon
  pokeListName = ''; // checks for empty name in html

  displayedColumns: string[] = ['kdex', 'Nep', 'pokemonName', 'type'];

  /**
   * End of organized table
   */

  linkedList: {pokemonNodeLists: {id: string, kdex: number, pokemonName: string, types: string}[]} [] = [];

  ngOnInit() {
    this.pokemonService.getPokemon();
    this.pokeListSubs = this.pokemonService.getPokemonGetListUpdatedListener().subscribe((pokeArr) => {
      console.log(pokeArr);
      this.pokemonList = pokeArr;
      // let count = 0;
      const pokemonNodeList: { id: string, kdex: number, pokemonName: string, types: string }[] = [];

      for (let i = 0; i < this.pokemonList.length; i = i + 1) {

        pokemonNodeList.push({
          id: this.pokemonList[i].id,
          kdex: this.pokemonList[i].kdex,
          pokemonName: this.pokemonList[i].pokemonName,
          types: this.pokemonList[i].types
        });



        if ( (i + 1)  % 2 === 0) {
          const l = {
            pokemonNodeLists: pokemonNodeList
          };
          this.linkedList.push(l);
        }
      }

      this.linkedList = [...this.linkedList];

      console.log(this.linkedList);
      // console.log(this.linkedList[1].pokemonNodeLists);
    });

    /**
     * part of the taable
     */
  }

  ngOnDestroy() {
    this.pokeListSubs.unsubscribe();
  }

}
