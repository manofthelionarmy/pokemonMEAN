import { PokemonService } from './../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moveset-create',
  templateUrl: './moveset-create.component.html',
  styleUrls: ['./moveset-create.component.css']
})
export class MovesetCreateComponent implements OnInit, OnDestroy {

  constructor(private pokemonService: PokemonService) { }

  public selectOptions: {id: string, kdex: number, pokemonName: string}[];

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
}
