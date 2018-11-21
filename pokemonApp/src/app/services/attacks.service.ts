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


  private attackList: Attacks[] = [];
  private allAttacksListUpdated = new Subject<Attacks[]>();
  private selectedAttacks: Attacks[] = [];
  private selectedAttackFeed = new Subject<Attacks>();
  private allSelectedAttacks = new Subject<Attacks[]>();
  private moveset_exists: boolean;
  private moveset_existsFeed = new BehaviorSubject<boolean>(false);

  private selectedMoveset = new Subject<Moveset>();

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

  addMoveset(attacks: { id: string }[], selectedPokemon: { id: string, kdex: number, pokemonName: string }) {
    const url = `http://localhost:3000/api/addMoveset/${selectedPokemon.id}/${selectedPokemon.kdex}/${selectedPokemon.pokemonName}`;

    this.http.post<{ message: string }>(url, attacks).subscribe();
  }

  getMoveset(selectedPokemon: {id: string, kdex: number, pokemonName: string}) {
    const url = `http://localhost:3000/api/getMoveset/${selectedPokemon.id}`;
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
}
