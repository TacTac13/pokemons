import { PokemonModel, PokemonSateModel } from '../models/pokemon.model';

export default class AppState {
  pokemons!: {
    pokemonsList: PokemonModel[];
    isLoading: boolean;
    pokemonDetails: any;
  };
}
