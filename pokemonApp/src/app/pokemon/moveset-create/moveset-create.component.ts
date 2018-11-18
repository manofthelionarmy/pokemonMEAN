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

  public selectAttackOptions: Attacks[];

  public selectedPokemon: {id: string, kdex: number, pokemonName: string};
  public selectedAttacks: Attacks[] = [];

  private pokemonSubs: Subscription;

  private attackSubscription: Subscription;

  pokmonControl: FormControl = new FormControl('', Validators.required);

  attackControl: FormControl = new FormControl('', Validators.required);

  ngOnInit() {
    this.pokemonService.getPokemonOptions();
    this.pokemonSubs = this.pokemonService.getPokemonOptionsUpdateListener()
                                          .subscribe((options: {id: string, kdex: number, pokemonName: string}[]) => {
                                            this.selectOptions = options;
                                          });
    this.pokemonService.getAttackOptions();
    this.attackSubscription = this.pokemonService.getAttacksListUpdatedListener().subscribe((attacks) => {
      this.selectAttackOptions = attacks;
    });
  }

  ngOnDestroy() {
    this.pokemonSubs.unsubscribe();
    this.attackSubscription.unsubscribe();
  }

  onselect(pokemon): void {
    // I want to pass the selected option from mat-select
    try {
      this.pokemonService.addToSelectedPokemonFeed(pokemon);
      this.selectedPokemon = pokemon;
    } catch (err) {
      console.error(err);
    }
  }

  onselectAttack(attack: Attacks) {
    try {

      this.selectedAttacks.push(attack);

      this.pokemonService.addToSelectedAttackFeed(this.selectedAttacks);
    } catch (err) {
      console.log(err);
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    form.resetForm();

    this.snackbar.open('Attack Added', 'Close', {
      duration: 3000
    });

  }
}
