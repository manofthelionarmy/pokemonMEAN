import { Pokemon } from './../../../models/pokemon/pokemon.model';
import { PokemonService } from './../../../services/pokemon.service';
import { map} from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {interval} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private sanitizer: DomSanitizer) { }
  private id;

  pokemon: Pokemon;

  pokemonSub: Subscription;
  timeSub: Subscription;
  finishedLoading = false;
  ngOnInit() {

    this.finishedLoading = false;
    this.route.params.pipe(map(params => params['id'])).subscribe((id) => {
      this.id = id;
    });

    this.pokemonService.getAPokemon(this.id);

    this.pokemonSub = this.pokemonService.getPokemonUpdatedListener().subscribe((p) => {
      this.pokemon = p;
      console.log(this.pokemon);
      /**This was used to help visualize the progress spinner */
      /*this.timeSub = interval(3000).subscribe(() => {

      });*/
      this.finishedLoading = true;

    });
  }

  ngOnDestroy() {
    // if i don't unsubsribe, the number of items in the feed will increase (n+1)
    this.pokemonSub.unsubscribe();
    // this.timeSub.unsubscribe();
  }

  // little hack for now. will implement sprite upload soon but this'll be a good format to have.
  updateBackground() {
    const p = this.pokemon.pokemonName.toLowerCase();
    const imageUrl = `https://img.pokemondb.net/sprites/silver/normal/${p}.png`;

    return this.sanitizer.bypassSecurityTrustStyle('background-image: url(' + imageUrl + '); background-size: cover');
  }
}
