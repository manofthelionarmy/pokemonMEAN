import { Moveset } from './../models/pokemon/movset.model';
import { map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
import { Attacks } from './../models/pokemon/attacks.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttacksService {

  // this value is used as a buffer to store all of the attacks from the db
  private attackList: Attacks[] = [];
  // this will store all the atacks in a feed. This is important for mat select to show the options
  private allAttacksListUpdated = new Subject<Attacks[]>();

  // this array will store all the selected attacks from mat-select
  private selectedAttacks: Attacks[] = [];
  // this array store the selected attack from mat-select in the feed
  private selectedAttackFeed = new Subject<Attacks>();
  // this array will store all of the selected attacks in the the feed
  private allSelectedAttacks = new Subject<Attacks[]>();

  // this will tell us if the moveset for a pokemon exists already
  private moveset_exists: boolean;

  // this will store the moveset_exists value in a feed
  private moveset_existsFeed = new BehaviorSubject<boolean>(false);

  // this will store the selected moveset in a feed
  private selectedMoveset = new Subject<Moveset>();

  private clearSelectedAttacks = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  addAttack(a: Attacks) {
    const url = 'http://localhost:3000/api/addAttack/';

    console.log(a.attackName);

    this.http.post<{ message: string, attackId: string }>(url, a)
      .subscribe((responseData) => {
        const id = responseData.attackId;
        a.id = id;
        this.attackList.push(a);
        this.allAttacksListUpdated.next([...this.attackList]);
      });

  }

  // something is broken with this.
  // maybe I have to fix the req body!
  addMoveset(moveset: {attacks: string[], pokemonId: string}) {
    const url = `http://localhost:3000/api/addMoveset`;

    this.http.post<{ message: string }>(url, moveset).subscribe();
  }

  getMoveset(selectedPokemon: {id: string, kdex: number, pokemonName: string}) {
    const url = `http://localhost:3000/api/getMoveset/${selectedPokemon.id}`;
  }

  updateMoveset(m: {id: string, pokemonId: string, attacks: string[]}) {
    const url = 'http://localhost:3000/api/updateMoveset';
    const argument = m;
    this.http.put<{message: string}>(url, argument).subscribe();

  }

  checkIfMovesetExists(selectedPokemon: { id: string, kdex: number, pokemonName: string }) {
    const url = `http://localhost:3000/api/checkMovesetExists/${selectedPokemon.id}/${selectedPokemon.kdex}/${selectedPokemon.pokemonName}`;

    return this.http.get<{ message: string, moveset: Moveset, exists: boolean }>(url)
      .subscribe((response) => {
        // solution failed!! the stream is out of sync!!!!
        this.moveset_exists = response.exists;
        this.moveset_existsFeed.next(this.moveset_exists);

        if (this.moveset_exists) {
          console.log(response.moveset);
          this.selectedMoveset.next(response.moveset);
        }
      });
  }


  getAttackOptions() {
    const url = 'http://localhost:3000/api/getAttackOptions';

    return this.http.get<{ message: string, attacks: any[] }>(url)
      .pipe(map((attackData) => {
        return attackData.attacks.map(a => {
          return {
            id: a._id,
            attackNumber: a.attackNumber,
            attackName: a.attackName,
            PP: a.PP,
            power: a.power,
            accuracy: a.accuracy,
            type: a.type,
            category: a.category
          };
        });
      }))
      .subscribe((tranformedAttack) => {
        this.attackList = tranformedAttack;
        this.allAttacksListUpdated.next([...this.attackList]);
      });
  }

  getAttacksListUpdatedListener() {
    return this.allAttacksListUpdated.asObservable();
  }

  // This will get the selected attack from mat-select and push it into this attack feed
  addToSelectedAttackFeed(attacks: Attacks) {
    // this.selectedAttacks.push(attacks);
    this.selectedAttackFeed.next(attacks);
  }

  // this will get the all of the attacks and put them into a feed
  addToAllSelectedAttacksFeed(attacks: Attacks) {
    this.selectedAttacks.push(attacks);
    this.allSelectedAttacks.next([...this.selectedAttacks]);
  }

  addToAllSelectedAttacksFeed2(attacks: Attacks[]) {
    this.selectedAttacks = attacks;
    this.allSelectedAttacks.next([...this.selectedAttacks]);
  }

  // this will get a selected attack and remove it from the feed that contains all of the attacks
  removeFromSelectedAttackFeed(attack: Attacks) {

    const index = this.selectedAttacks.findIndex((a) => a.attackName === attack.attackName );
    console.log('From the service: ' + index);
    if ( index !== -1) {
      this.selectedAttacks.splice(index, 1);
    }

    this.allSelectedAttacks.next([...this.selectedAttacks]);
  }

  // this will remove everything the feed that contains all of the selected attacks
  removeAllFromSelectedAttackFeed() {

    // Remove all the entries in the array
    this.selectedAttacks.splice(0);

    this.allSelectedAttacks.next([...this.selectedAttacks]);
  }

  getSelectedAttacks() {
    return this.selectedAttackFeed.asObservable();
  }

  getAllSelectedAttacks() {
    return this.allSelectedAttacks.asObservable();
  }
  addToMovesetExistsFeed(exist: boolean) {
    this.moveset_existsFeed.next(exist);
  }


  // is the stream that tells us if the moveset exists
  getMovesetExistFeedUpdateListener() {
    return this.moveset_existsFeed.asObservable();
  }

  // if the moveset exists, will get the selected pokemon's moveset from the feed
  getMovesetUpdateListener() {
    return this.selectedMoveset.asObservable();
  }

  clearSelectedAttacksFeeed() {
    this.clearSelectedAttacks.next(true);
  }

  getClearSignal() {
    return this.clearSelectedAttacks.asObservable();
  }
}
