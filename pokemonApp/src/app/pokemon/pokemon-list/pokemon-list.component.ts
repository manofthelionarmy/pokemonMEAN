import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(private pokemonService: PokemonService, private sanitizer: DomSanitizer) { }

  private pokeListSubs: Subscription;

  private Colors = {
    grass: '#0b7c38',
    fire: 'orange',
    water: 'blue',
    electric: 'gold',
    flying: 'skyblue',
    ground: 'brown',
    poison: 'purple',
    psychic: 'deeppink',
    rock: '#DEB887',
    normal: 'grey',
    bug: '	#8FBC8F',
    dragon: 'crimson',
    fighting: 'firebrick',
    ice: 'powderblue',
    ghost: 'mediumpurple'
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

  finishedLoading = false;

  ngOnInit() {

    this.finishedLoading = false;
    this.pokemonService.getPokemon();
    this.pokeListSubs = this.pokemonService.getPokemonGetListUpdatedListener().subscribe((pokeArr) => {
      console.log(pokeArr);
      this.pokemonList = pokeArr;
      this.finishedLoading = true;
      // console.log(this.linkedList[1].pokemonNodeLists);
    });

  }

  ngOnDestroy() {
    this.pokeListSubs.unsubscribe();
  }

  changeColor(types: string): string {

    /*if ( types[0].toLowerCase() === 'grass') {
      console.log('here');
      return `#0b7c38`;
    }*/
    console.log(types);
    return this.Colors[types.toLowerCase()];
  }

  // litte hack for now: will implement uploading of sprites soon
  getImage(n) {
    const p = n.toLowerCase();
    const imageUrl = `https://img.pokemondb.net/sprites/silver/normal/${p}.png`;

    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

}
