import { StatsModel } from './stats.mode';
export class PokemonModel {
    constructor(
        public id: string,
        public name: string,
        public species: string,
        public type: string[],
        public height: string,
        public weight: string,
        public abilities: string[],
        public stats: StatsModel,
        public evolution: string[]
    ) { }
}