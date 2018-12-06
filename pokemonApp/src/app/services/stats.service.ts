import { environment } from './../../environments/environment';
import { Stats } from './../models/pokemon/stats.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  addStat(pokemon: {id: string, kdex: number, pokemonName: string}, stats: Stats) {
    const url = environment.apiUrl + `/addStats/${pokemon.id}`;

    this.http.post<{message: string}>(url, stats).subscribe((response) => {
      console.log(response.message);
    });
  }
}
