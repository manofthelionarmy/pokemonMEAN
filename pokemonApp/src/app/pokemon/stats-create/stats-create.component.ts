import { Stats } from './../../models/pokemon/stats.model';
import { NgForm } from '@angular/forms';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-stats-create',
  templateUrl: './stats-create.component.html',
  styleUrls: ['./stats-create.component.css']
})
export class StatsCreateComponent implements OnInit, OnDestroy {

  constructor(private pokemonService: PokemonService, private statsService: StatsService) { }

  pokemonOptions: {id: string, kdex: number, pokemonName: string}[] = [];

  pokemonOptionSub: Subscription;

  selectedPokemon: {id: string, kdex: number, pokemonName: string} = undefined;
  ngOnInit() {

    this.pokemonService.getPokemonOptions();

    this.pokemonOptionSub = this.pokemonService.getPokemonOptionsUpdateListener()
                                               .subscribe((options) => {
                                                            this.pokemonOptions = options;
                                                            console.log(this.pokemonOptions);
                                                          });

  }

  ngOnDestroy() {
    this.pokemonOptionSub.unsubscribe();
  }

  updateSelectedPokemon(pokemon: any) {
    console.log(pokemon);

    this.selectedPokemon = pokemon;
  }

  onAddStatsForm(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const stats: Stats = {
      id: null,
      hp: form.value.hp,
      attack: form.value.attack,
      defense: form.value.defense,
      special_attack: form.value.special_attack,
      special_defense: form.value.special_defense,
      speed: form.value.speed
    };

    this.statsService.addStat(this.selectedPokemon, stats);

    form.resetForm();
  }

}
