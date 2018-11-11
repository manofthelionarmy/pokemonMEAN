import { PokemonService } from './../../services/pokemon.service';
import { Abilities } from './../../models/pokemon/abilities.model';
import { Weaknesses } from './../../models/pokemon/weaknesses.model';
import { Evolutions } from './../../models/pokemon/evolutions.model';
import { Pokemon } from './../../models/pokemon/pokemon.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Resistances } from 'src/app/models/pokemon/resistances.model';


@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.css']
})
export class PokemonCreateComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  onAddPokemon(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const resistance: Resistances = {
      id: null,
      kdex: form.value.kdex,
      pokemonName: form.value.name,
      resistances: [form.value.resistance]
    };

    const evolutions: Evolutions = {
      id: null,
      kdex: form.value.kdex,
      pokemonName: form.value.evolutionName
    };

    const weakness: Weaknesses = {
      id: null,
      kdex: form.value.kdex,
      pokemonName: form.value.name,
      weaknesses: [form.value.weakness]
    };

    const ability: Abilities = {
      id: null,
      kdex: form.value.kdex,
      abilityName: form.value.ability
    };

    const pokemon: Pokemon = {
      id: null,
      pokemonName: form.value.name,
      kdex: form.value.kdex,
      types: [form.value.types],
      resistances: resistance,
      evolutions: evolutions,
      weaknesses: weakness,
      abilities: ability,
      height: form.value.height,
      weight: form.value.weight,
      description: form.value.description
    };

    this.pokemonService.addPokemon(pokemon);
    form.resetForm();
  }

}
