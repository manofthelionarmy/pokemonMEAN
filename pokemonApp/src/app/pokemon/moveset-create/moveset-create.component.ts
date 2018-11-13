import { MatSnackBar } from '@angular/material';
import { Attacks } from './../../models/pokemon/attacks.model';
import { PokemonService } from './../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-moveset-create',
  templateUrl: './moveset-create.component.html',
  styleUrls: ['./moveset-create.component.css']
})
export class MovesetCreateComponent implements OnInit, OnDestroy {

  constructor(private pokemonService: PokemonService, private snackbar: MatSnackBar) { }

  public selectOptions: {id: string, kdex: number, pokemonName: string}[];

  public selectedPokemon: {id: string, kdex: number, pokemonName: string};

  private pokemonSubs: Subscription;

  pokmonControl: FormControl = new FormControl('', Validators.required);


  ngOnInit() {
    this.pokemonService.getPokemonOptions();
    this.pokemonSubs = this.pokemonService.getPokemonOptionsUpdateListener()
                                          .subscribe((options: {id: string, kdex: number, pokemonName: string}[]) => {
                                            this.selectOptions = options;
                                          });
  }

  ngOnDestroy() {
    this.pokemonSubs.unsubscribe();
  }

  onselect(pokemon): void {
    // I want to pass the selected option from mat-select
    try {
      this.pokemonService.addToSelectedPokemonFeed(pokemon);
    } catch (err) {
      console.error(err);
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const attack: Attacks = {
      id: null,
      attackNumber: form.value.attackNumber,
      attackName: form.value.attackName,
      power: form.value.power,
      PP: form.value.powerpoints,
      accuracy: form.value.accuracy,
      type: form.value.type,
      category: form.value.category
    };

    this.pokemonService.addAttack(attack);

    form.resetForm();

    this.snackbar.open('Attack Added', 'Close', {
      duration: 3000
    });

  }
}
