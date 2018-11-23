import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})


export class PokemonListComponent implements OnInit, OnDestroy {

  private pokemonListSub: Subscription;

  pokemonList: {id: string, kdex: number, pokemonName: string}[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemon();

    this.pokemonListSub = this.pokemonService.getPokemonUpdatedListListner().subscribe((pokemonArray) => {
      console.log(pokemonArray);
      this.pokemonList = pokemonArray;
    });
  }

  ngOnDestroy() {
    this.pokemonListSub.unsubscribe();
  }


}
