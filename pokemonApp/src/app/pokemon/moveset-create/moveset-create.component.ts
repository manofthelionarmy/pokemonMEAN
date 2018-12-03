import { Pokemon } from './../../models/pokemon/pokemon.model';
import { Moveset } from './../../models/pokemon/movset.model';
import { AttacksService } from './../../services/attacks.service';
import { MatSnackBar, MatGridTileHeaderCssMatStyler } from '@angular/material';
import { Attacks } from './../../models/pokemon/attacks.model';
import { PokemonService } from './../../services/pokemon.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-moveset-create',
  templateUrl: './moveset-create.component.html',
  styleUrls: ['./moveset-create.component.css']
})
export class MovesetCreateComponent implements OnInit, OnDestroy {

  constructor(private pokemonService: PokemonService, private attackService: AttacksService, private snackbar: MatSnackBar) { }

  public selectOptions: {id: string, kdex: number, pokemonName: string}[];

  public selectAttackOptions: Attacks[];

  private selectedPokemon: {id: string, kdex: number, pokemonName: string};
  private selectedAttacks: Attacks[] = [];

  // Subscribes to the selected pokemon feed
  private pokemonSubs: Subscription;

  // Subscribes to the total attack list feed
  private attackListSubscription: Subscription;
  // Subscribes to the selected attack list feed
  private selectedAttackListSub: Subscription;

  private movesetExists: Subscription;

  private movesetSub: Subscription;

  doesMovesetExist = false;

  moveset: Moveset;

  pokmonControl: FormControl = new FormControl('', Validators.required);

  attackControl: FormControl = new FormControl('', Validators.required);

  movesetFormGroup: FormGroup = new FormGroup({
    pokemonContrl: this.pokmonControl, attackControl: this.attackControl
  });


  ngOnInit() {
    this.pokemonService.getPokemonOptions();
    this.pokemonSubs = this.pokemonService.getPokemonOptionsUpdateListener()
                                          .subscribe((options: {id: string, kdex: number, pokemonName: string}[]) => {
                                            this.selectOptions = options;
                                          });
    this.attackService.getAttackOptions();

    // Subscribe to the feed that has the total list of all the attacks (and the total list updates in real time)
    // from the database
    this.attackListSubscription = this.attackService.getAttacksListUpdatedListener().subscribe((attacks) => {
      this.selectAttackOptions = attacks;
    });

    // Subscribe to the feed that has all of the selectd attacks
    /**This component has the responsiblity of adding all of the
     * the selected attacks to the moveset collection in the cloud db.
     * We are pushing the list of selected attacks in a feed because
     * the moveset list component will retrieve the attacks from the feed
     * and can remove items from the feed.
     * This component will be listening to the event the total selected attacks feed has had
     * new entries added to it or removed from it.
     */
    this.selectedAttackListSub = this.attackService.getAllSelectedAttacks().subscribe((attacks) => {
      this.selectedAttacks = attacks;
    });

    // We extract the boolean value from the feed to see if the moveset already exists in the DB
    this.movesetExists = this.attackService.getMovesetExistFeedUpdateListener().subscribe((value) => {
      console.log('Does moveset exist(1)? ' + value);
      this.doesMovesetExist = value;
    });

    this.movesetSub = this.attackService.getMovesetUpdateListener().subscribe((value) => {
      this.moveset = value;
    });

  }

  ngOnDestroy() {
    this.pokemonSubs.unsubscribe();
    this.attackListSubscription.unsubscribe();
    this.selectedAttackListSub.unsubscribe();
    this.movesetExists.unsubscribe();
    this.movesetSub.unsubscribe();
  }

  onselect(pokemon): void {
    // I want to pass the selected option from mat-select
    try {
      if (pokemon === undefined) {
        throw console.error('Error while selecting pokemon');
      }
      // Adding it to the feed so the moveset list component can look into this feed.
      this.pokemonService.addToSelectedPokemonFeed(pokemon);
      this.selectedPokemon = pokemon;

      this.attackService.checkIfMovesetExists(this.selectedPokemon);

    } catch (err) {
      console.log(err);
    }
  }

  onselectAttack(attack) {
    try {
      if (attack === undefined) {
        console.log('Cannot select undefined');
      } else {
        console.log(attack.id);
        // instead, add a single attack to the feed
        /**Send the selected attack to the moveset-list component */
        this.attackService.addToSelectedAttackFeed(attack);
        /**And add the list to the total selected attacks */
        this.attackService.addToAllSelectedAttacksFeed(attack);
      }
    } catch (err) {

    }
  }

  addMoveset(form: NgForm) {
    console.log(this.selectedAttacks.length);
    if (form.invalid && this.selectedAttacks.length === 0) {
      return;
    }

    const attackIds: string[] = [];
    this.selectedAttacks.forEach( a => {
      attackIds.push(a.id);
    });



    if (!this.doesMovesetExist) {
      console.log('Adding Moveset');
      const moveset = {
        pokemonId: this.selectedPokemon.id,
        attacks: attackIds
      };

      this.attackService.addMoveset(moveset);
    } else {
      console.log('Updating Moveset');
      const updateMoveset = {
        id: this.moveset.id,
        pokemonId: this.selectedPokemon.id,
        attacks: attackIds
      };

      console.log(updateMoveset);

      this.attackService.updateMoveset(updateMoveset);
    }

    form.resetForm();

    this.attackService.removeAllFromSelectedAttackFeed();

    this.attackService.clearSelectedAttacksFeeed();

    // This step is done to reset the Header above the table in the UI
    this.pokemonService.addToSelectedPokemonFeed({id: null, kdex: null, pokemonName: ''});

    this.snackbar.open('Moveset Added', 'Close', {
      duration: 3000
    });
  }
}
