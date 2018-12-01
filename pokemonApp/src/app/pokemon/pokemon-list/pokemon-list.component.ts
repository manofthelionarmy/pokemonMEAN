import { Pokemon } from './../../models/pokemon/pokemon.model';
import { map } from 'rxjs/operators';
import { PokemonService } from './../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  constructor(private pokemonService: PokemonService) { }

  private pokeListSubs: Subscription;

  private Colors = {
    grass: '#0b7c38',
    fire: 'orange',
    water: 'blue',
    electric: 'gold'
  };
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

      let row = 0;
      for (let i = 0; i < this.pokemonList.length; i = i + 1) {


        const pItem = {
          id: this.pokemonList[i].id,
          kdex: this.pokemonList[i].kdex,
          pokemonName: this.pokemonList[i].pokemonName,
          types: this.pokemonList[i].types
        };

        /**If we have reached the 8th pokemon, create a new row*/
        if ( (i)  % 8 === 0 && i !== 0) {
          const l = {
            pokemonNodeLists: [pItem]
          };
          this.linkedList.push(l);
          row = row + 1;
        } else {
          /**Otherwise, if the linkedList is empty initalize it. If it is not empty, keep adding
           * <td>'s to the current HTML <tr> in the HTML <table>
           */
          if ( this.linkedList.length === 0 ) {
            const l =  {
              pokemonNodeLists: [pItem]
            };
            this.linkedList.push(l);
          } else {
            this.linkedList[row].pokemonNodeLists.push(pItem);
            this.linkedList[row].pokemonNodeLists = [...this.linkedList[row].pokemonNodeLists];
          }

        }
      }

      this.linkedList = [...this.linkedList];

      console.log(this.linkedList);
      // console.log(this.linkedList[1].pokemonNodeLists);
    });

    /**
     * part of the table
     */
    const p = document.getElementsByClassName('item');

    console.log(p);

  }

  ngOnDestroy() {
    this.pokeListSubs.unsubscribe();
  }

  changeColor(types: string): string {

    /*if ( types[0].toLowerCase() === 'grass') {
      console.log('here');
      return `#0b7c38`;
    }*/
    return this.Colors[types[0].toLowerCase()];
  }

}
