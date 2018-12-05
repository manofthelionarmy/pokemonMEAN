import { PokemonService } from './../../services/pokemon.service';
import { Abilities } from './../../models/pokemon/abilities.model';
import { Weaknesses } from './../../models/pokemon/weaknesses.model';
import { Evolutions } from './../../models/pokemon/evolutions.model';
import { Pokemon } from './../../models/pokemon/pokemon.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Resistances } from 'src/app/models/pokemon/resistances.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.css']
})
export class PokemonCreateComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private snackbar: MatSnackBar) { }

  types_OptionsArray: string[] = [];

  selectedResistances: string[] = [];

  selectedWeaknesses: string[] = [];

  selectedTypes: string[] = [];

  maxTypesCount = 2;

  selectedTypesCount = 0;

  ngOnInit() {
    this.types_OptionsArray = [
      'Fire',
      'Water',
      'Grass',
      'Bug',
      'Dragon',
      'Ice',
      'Fighting',
      'Flying',
      'Ghost',
      'Ground',
      'Normal',
      'Poison',
      'Psychic',
      'Rock',
      'Electric'
    ];
  }

  onAddPokemon(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const resistance: Resistances = {
      id: null,
      kdex: form.value.kdex,
      pokemonName: form.value.name,
      resistances: this.selectedResistances
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
      weaknesses: this.selectedWeaknesses
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
      types: this.selectedTypes,
      resistances: resistance,
      evolution: evolutions,
      weaknesses: weakness,
      abilities: ability,
      moveset: null,
      stats: null,
      height: form.value.height,
      weight: form.value.weight,
      description: form.value.description
    };

    this.pokemonService.addPokemon(pokemon);
    form.resetForm();

    this.snackbar.open('Pokemon Added', 'Close', {
      duration: 2000
    });
  }

  updateSelectedWeaknesses(value: any[]) {


    this.selectedWeaknesses = [...value];

    /*const index = this.types_OptionsArray.findIndex((t) => t.typeName === value);
    this.types_OptionsArray[index].selected = true;*/
    console.log(this.selectedWeaknesses);
  }

  updateSelectedResistances(value: any[]) {

    this.selectedResistances = [...value];

    /*const index = this.types_OptionsArray.findIndex((t) => t.typeName === value);
    this.types_OptionsArray[index].selected = true;*/
    console.log(this.selectedResistances);
  }

  updateSelectedTypes(value: any[]) {

    this.selectedTypesCount = value.length;

    if (this.selectedTypesCount > this.maxTypesCount) {
      alert('You can only select at most 2 types');
    } else {
      this.selectedTypes = [...value];
    }


    console.log(this.selectedTypes);

  }

 }
