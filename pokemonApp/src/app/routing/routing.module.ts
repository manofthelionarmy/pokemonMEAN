import { AttackCreateComponent } from './../pokemon/attack-create/attack-create.component';
import { MovesetCreateComponent } from './../pokemon/moveset-create/moveset-create.component';
import { PokemonListComponent } from './../pokemon/pokemon-list/pokemon-list.component';
import { PokemonCreateComponent } from './../pokemon/pokemon-create/pokemon-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: PokemonCreateComponent},
  {path: 'list', component: PokemonListComponent},
  {path: 'moveset', component: MovesetCreateComponent},
  {path: 'attack', component: AttackCreateComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
