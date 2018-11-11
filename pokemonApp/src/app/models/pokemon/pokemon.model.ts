import { Abilities } from './abilities.model';
import { Evolutions } from './evolutions.model';
import { Weaknesses } from './weaknesses.model';
import { Resistances } from './resistances.model';
export interface Pokemon {
  id: string;
  pokemonName: string;
  kdex: number;
  types: string[];
  evolutions: Evolutions;
  resistances: Resistances;
  weaknesses: Weaknesses;
  abilities: Abilities;
  description: string;
  height: number;
  weight: number;
}
