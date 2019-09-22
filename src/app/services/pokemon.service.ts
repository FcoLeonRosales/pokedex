import { Injectable } from '@angular/core';
import pokedex from './../../data/pokemons.json';
import { PokemonModel } from '../models/pokemon.model.js';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemons: Array<PokemonModel>;

  getPokemons() {
    return pokedex;
  }

  getPokemonsBy() {
    const poke: any = this.getPokemons();
    const filter = poke.filter(
      po => {
        return po.name === 'Bulbasaur';
      }
    );
    return filter;
  }

  pokemonFormatiado() {
    const poke: Array<PokemonModel> = [];
    for (const i of pokedex) {
      poke.push(
        {
          id: i['id'],
          name: i['name'],
          species: i['species'],
          type: i['type'],
          height: i['height'],
          weight: i['weight'],
          abilities: i['abilities'],
          stats: {
            attack: i['stats'].attack,
            defense: i['stats'].defense,
            hp: i['stats'].hp,
            specialAtk: i['stats']['sp.atk'],
            specialDef: i['stats']['sp.def'],
            speed: i['stats'].speed,
            total: i['stats'].total
          },
          evolution: i['evolution']
        }
      );
    }
    return poke;
  }
}
