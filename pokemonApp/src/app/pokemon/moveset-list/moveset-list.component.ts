import { PokemonService } from './../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-moveset-list',
  templateUrl: './moveset-list.component.html',
  styleUrls: ['./moveset-list.component.css']
})
export class MovesetListComponent implements OnInit, OnDestroy {

  constructor(private pokemonService: PokemonService) { }
  data = [{
    attackNo: null,
    attackName: null,
    PP: null,
    accuracy: null,
    type: null,
    category: null
  }];

  private selectedPokemonFeed: Subscription;

  private results: Subscription;

  private pokemonToQueryFor: {id: string, kdex: number, pokemonName: string};

  displayedColumns: string[] = ['attackNo', 'attackName', 'PP', 'accuracy', 'type', 'category'];
  ngOnInit() {
    this.selectedPokemonFeed = this.pokemonService.getSelectedPokemon().subscribe((selectedPokemon) => {
      this.pokemonToQueryFor = selectedPokemon;
      this.pokemonService.queryForSelectedPokemon(this.pokemonToQueryFor);
    });

    this.results = this.pokemonService.getAttackListsFromQuery().subscribe();
  }

  ngOnDestroy() {
    this.selectedPokemonFeed.unsubscribe();
    this.results.unsubscribe();
  }
}
