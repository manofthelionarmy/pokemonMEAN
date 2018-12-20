import { Pokemon } from './../../../models/pokemon/pokemon.model';
import { PokemonService } from './../../../services/pokemon.service';
import { map} from 'rxjs/operators';
import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {interval} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {


  private id;

  chart: any;

  data: any[] = [];

  displayedColumns: string[] = ['attackNo', 'attackName', 'PP', 'accuracy', 'type', 'category'];

  pokemon: Pokemon;

  pokemonSub: Subscription;
  timeSub: Subscription;
  finishedLoading = false;

  @ViewChild('chart') chartRef;

  context: any;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.finishedLoading = false;
    this.route.params.pipe(map(params => params['id'])).subscribe((id) => {
      this.id = id;
    });

    this.pokemonService.getAPokemon(this.id);

    this.pokemonSub = this.pokemonService.getPokemonUpdatedListener().subscribe((p) => {
      this.pokemon = p;
      console.log(this.pokemon);

      // this.data = this.pokemon
      /**This was used to help visualize the progress spinner */
      /*this.timeSub = interval(3000).subscribe(() => {

      });*/
      this.finishedLoading = true;
      this.context = document.getElementById('canvas');

      // console.log(this.context);

    });

  }

  ngOnDestroy() {
    // if i don't unsubsribe, the number of items in the feed will increase (n+1)
    this.pokemonSub.unsubscribe();
    // this.timeSub.unsubscribe();
  }

  ngAfterViewInit() {
    this.context = document.getElementById('canvas');

    // console.log(this.context);

  }

  deletePokemon(id: string) {
    this.pokemonService.deletePokemon(id);
  }

  // little hack for now. will implement sprite upload soon but this'll be a good format to have.
  updateBackground() {
    const p = this.pokemon.pokemonName.toLowerCase();
    const imageUrl = `https://img.pokemondb.net/sprites/silver/normal/${p}.png`;

    return this.sanitizer.bypassSecurityTrustStyle('background-image: url(' + imageUrl + '); background-size: cover');
  }
}
