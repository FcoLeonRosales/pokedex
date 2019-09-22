import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { PokemonModel } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  pokemons: Array<PokemonModel>;

  length: number;
  pageSize: number;
  pageSizeOptions: number[];

  constructor(public pokedex: PokemonService) {
    this.length = pokedex.pokemonFormatiado().length;
    this.pageSize = 10;
    this.pageSizeOptions = [5, 10, 25, 100];
    this.inicializador({
      length: this.length,
      pageIndex: 0,
      pageSize: this.pageSize,
      previousPageIndex: 0
    });
  }

  inicializador(value: any) {
    const startPage = value.pageIndex * value.pageSize;
    const pokemons = this.pokedex.pokemonFormatiado().slice(startPage, ((value.pageIndex + 1) * value.pageSize));
    this.pokemons = pokemons;
    const grid = document.getElementsByClassName('showPokemon');
    window.scrollTo(0, 0);
  }

  OnBorderColor(type: string) {
    let typeColor: string;
    let typeColorBorder: string;
    switch (type) {
      case 'Fire':
        typeColor = '#f08030';
        typeColorBorder = '#9c531f';
        break;
      case 'Grass':
        typeColor = '#78C850';
        typeColorBorder = '#4E8234';
        break;
      case 'Water':
        typeColor = '#6890F0';
        typeColorBorder = '#445E9C';
        break;
      case 'Bug':
        typeColor = '#a8b820';
        typeColorBorder = '#6d7815';
        break;
      case 'Poison':
        typeColor = '#A040A0';
        typeColorBorder = '#682A68';
        break;
      case 'Normal':
        typeColor = '#a8a878';
        typeColorBorder = '#6d6d4e';
        break;
      case 'Electric':
        typeColor = '#F8D030';
        typeColorBorder = '#A1871F';
        break;
      case 'Fairy':
        typeColor = '#ee99ac';
        typeColorBorder = '#9b6470';
        break;
      case 'Ground':
        typeColor = '#E0C068';
        typeColorBorder = '#927D44';
        break;
      case 'Psychic':
        typeColor = '#F85888';
        typeColorBorder = '#A13959';
        break;
      case 'Flying':
        typeColor = '#A890F0';
        typeColorBorder = '#6D5E9C';
        break;
      case 'Fighting':
        typeColor = '#c03028';
        typeColorBorder = '#7d1f1a';
        break;
      case 'Rock':
        typeColor = '#b8a038';
        typeColorBorder = '#786824';
        break;
      case 'Ghost':
        typeColor = '#705898';
        typeColorBorder = '#493963';
        break;
      case 'Ice':
        typeColor = '#98d8d8';
        typeColorBorder = '#638d8d';
        break;
      case 'Dragon':
        typeColor = '#7038f8';
        typeColorBorder = '#4924a1';
        break;
      default:
        typeColor = 'black';
        typeColorBorder = 'black';
        break;
    }
    return [typeColor, typeColorBorder];
  }
  ngOnInit(): void {
  }
}
