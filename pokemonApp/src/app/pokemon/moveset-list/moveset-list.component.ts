import { Attacks } from './../../models/pokemon/attacks.model';
import { map } from 'rxjs/operators';
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
  data: Attacks[];

  private selectedPokemonFeed: Subscription;

  private results: Subscription;

  private selectedAttacksFeed: Subscription;

  selectedPokemon: {id: string, kdex: number, pokemonName: string};

  displayedColumns: string[] = ['attackNo', 'attackName', 'PP', 'accuracy', 'type', 'category', 'actions'];
  ngOnInit() {
    this.selectedPokemonFeed = this.pokemonService.getSelectedPokemon().subscribe((selectedPokemon) => {
      this.selectedPokemon = selectedPokemon;
      this.data = [];
      // this will get the latest pokemon in the 'select-pokemon-feed'
      // and use it to query for the list of attacks belonging to that pokemon
      // this.pokemonService.queryForSelectedPokemon(this.pokemonToQueryFor);
    });

    // this.results = this.pokemonService.getAttackListsFromQuery().subscribe();
    this.selectedAttacksFeed = this.pokemonService.getSelectedAttacks().subscribe( (selectedAttacks) => {
      this.data = selectedAttacks;

      console.log(this.data);
    });
  }


  removeAttack(attackRemoving: Attacks) {

    console.log(attackRemoving.attackName);
    this.data = this.data.filter(attack => attack.attackName !== attackRemoving.attackName);
    this.pokemonService.addToSelectedAttackFeed(this.data);
  }

  ngOnDestroy() {
    this.selectedPokemonFeed.unsubscribe();
    this.selectedAttacksFeed.unsubscribe();
  }
}
