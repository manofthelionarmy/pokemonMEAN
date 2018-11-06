import { Attacks } from './attacks.model';
export interface Moveset  {
  id: string;
  pokemonName: string;
  kdex: number;
  attacks: Attacks[];
}
