import { AttacksService } from './../../services/attacks.service';
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

  constructor(private pokemonService: PokemonService, private attackService: AttacksService) { }
  data: Attacks[] = [];

  private attacksFromMoveList: Attacks[] = [];

  private doesMovesetExist = false;
  private selectedPokemonFeed: Subscription;

  private selectedAttacksFeed: Subscription;

  private movesetFeed: Subscription;

  private clearSelectedAttacksListener: Subscription;

  private movesetExist: Subscription;

  selectedPokemonName = '';

  selectedPokemon: {id: string, kdex: number, pokemonName: string};

  finishedLoading = false;

  displayedColumns: string[] = ['attackNo', 'attackName', 'PP', 'accuracy', 'type', 'category', 'actions'];
  ngOnInit() {

    this.finishedLoading = true;
    this.selectedPokemonName = '';
    this.selectedPokemonFeed = this.pokemonService.getSelectedPokemon().subscribe((selectedPokemon) => {



      this.selectedPokemon = selectedPokemon;
      this.selectedPokemonName = this.selectedPokemon.pokemonName;

      // this.attackService.checkIfMovesetExists(this.selectedPokemon);
      // this.data = [];
      // this will get the latest pokemon in the 'select-pokemon-feed'
      // and use it to query for the list of attacks belonging to that pokemon
      // this.pokemonService.queryForSelectedPokemon(this.pokemonToQueryFor);

      if ( this.selectedPokemon.pokemonName === '') {
        this.finishedLoading = true;
      } else {
        this.finishedLoading = false;
      }

      this.data.splice(0);

      this.data = [...this.data];

    });

    // this.results = this.pokemonService.getAttackListsFromQuery().subscribe();
    this.selectedAttacksFeed = this.attackService.getSelectedAttacks().subscribe( (selectedAttack) => {

      if ( this.attacksFromMoveList.length === 0 ) {

        this.data = this.data.concat(selectedAttack);
      } else {
        this.data = this.data.concat(selectedAttack);
      }
      console.log(this.data);

    });

    this.movesetFeed = this.attackService.getMovesetUpdateListener().subscribe((value) => {

      this.attacksFromMoveList = value.attacks;

      if (this.attacksFromMoveList.length > 0) {
        this.data = this.attacksFromMoveList;

        this.attackService.addToAllSelectedAttacksFeed2(this.attacksFromMoveList);
        console.log('has attacks');

      }

    });

    this.movesetExist = this.attackService.getMovesetExistFeedUpdateListener().subscribe((value) => {
      if (!value ) {
        this.data.splice(0);
        this.data = [...this.data];
      }

      this.finishedLoading = true;
    });

    this.clearSelectedAttacksListener = this.attackService.getClearSignal().subscribe((value) => {

      if (value) {
        this.data.splice(0);
        this.data = [...this.data];
      }
    });
  }


  removeAttack(attackRemoving: Attacks) {

    console.log('Removing attack: ' + attackRemoving.attackName);
    // remove the attack from the data!
    // this.data = this.data.filter(attack => attack.attackName !== attackRemoving.attackName);
    // remove the attack from the feed too!!
    const index = this.data.findIndex((a) =>  a.attackName === attackRemoving.attackName );
    console.log('From the component: ' + index);

    if (index !== - 1) {
      this.data.splice(index, 1);
      // need to notify the DOM that the data array has been updated by setting it equal to the spread
      this.data = [...this.data];
      console.log(this.data);
      this.attackService.addToAllSelectedAttacksFeed2(this.data);
    }
  }

  ngOnDestroy() {
    this.selectedPokemonFeed.unsubscribe();
    this.selectedAttacksFeed.unsubscribe();
    this.movesetFeed.unsubscribe();
    this.clearSelectedAttacksListener.unsubscribe();
    this.movesetExist.unsubscribe();
  }
}
