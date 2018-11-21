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
  data: Pokemon[];

  private selectedPokemonFeed: Subscription;

  selectedPokemonNameFeed: Subscription;

  selectedPokemon: {id: string, kdex: number, pokemonName: string};

  /**For more info, look at pokemon.model.ts
   * can only have a string max of 140 characters. This means you cannnot
   * add every single thing from pokemon.model.ts because its too long.
   * You ommited height and weight.
   */
  displayedColumns: string[] = ['pokemonName', 'kdex', 'types', 'evolutions', 'resistances', 'weaknesses', 'abilities', 'description'];
  ngOnInit() {
    this.selectedPokemonFeed = this.pokemonService.getSelectedPokemon().subscribe((selectedPokemon) => {
      this.selectedPokemon = selectedPokemon;
    });
    // Using  getSelectedPokemonList() from pokemon.service
    this.selectedPokemonNameFeed = this.pokemonService.getSelectedPokemonList().subscribe( (selectedPokemonName) => {
      this.data = selectedPokemonName;

      console.log(this.data);
    });
  }

  ngOnDestroy() {
    this.selectedPokemonFeed.unsubscribe();
    this.selectedPokemonNameFeed.unsubscribe();
  }
}
