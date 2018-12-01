import { PokemonService } from './../../../services/pokemon.service';
import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }
  private id;

  pokemonSub: Subscription;
  ngOnInit() {
    this.route.params.pipe(map(params => params['id'])).subscribe((id) => {
      this.id = id;
      this.pokemonService.getAPokemon(this.id);
    });

    this.pokemonSub = this.pokemonService.getPokemonUpdatedListener().subscribe((p) => {
      console.log(p);
    });
  }

  ngOnDestroy() {
    // if i don't unsubsribe, the number of items in the feed will increase (n+1)
    this.pokemonSub.unsubscribe();
  }


}
