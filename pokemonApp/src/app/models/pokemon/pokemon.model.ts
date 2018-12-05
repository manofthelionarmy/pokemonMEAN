import { Stats } from './stats.model';
import { Moveset } from './movset.model';
import { Abilities } from './abilities.model';
import { Evolutions } from './evolutions.model';
import { Weaknesses } from './weaknesses.model';
import { Resistances } from './resistances.model';
export interface Pokemon {
  id: string;
  pokemonName: string;
  kdex: number;
  types: string[];
  evolution: Evolutions;
  resistances: Resistances;
  weaknesses: Weaknesses;
  abilities: Abilities;
  moveset: Moveset;
  stats: Stats;
  description: string;
  height: number;
  weight: number;
}
